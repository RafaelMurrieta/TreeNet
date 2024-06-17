import express, { response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import multer from 'multer';

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Conectar a MongoDB Atlas
const uri = 'mongodb+srv://RafaelMurrieta:6iVJdQfe3JC4qHPq@treedevs.mi9s3ek.mongodb.net/TreeNet?retryWrites=true&w=majority';
mongoose.connect(uri)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch((err) => console.error('Error al conectar a MongoDB Atlas:', err));

    
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads'); // Directorio donde se guardarán temporalmente las imágenes
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + '-' + file.originalname); // Nombre de archivo único
    }
});
// Definir esquema y modelo de usuario
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { collection: 'users' });


const PostUserSchema = new mongoose.Schema({
    body: { type: String, required: true },
    userId: { type: String, required: true },
    image: { type: String, required: false },
    date: { type: String, required:true },
  }, { collection: 'post' });

const User = mongoose.model('User', UserSchema);
const PostUser = mongoose.model('PostUser', PostUserSchema);


// Ruta para verificar usuario
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(`Datos recibidos:\nEmail: ${email}\nContraseña: ${password}`);
    try {
        const user = await User.findOne({ email });
        if (user && user.password === password) {
            console.log('Inicio de sesión exitoso');
            res.json({ success: true , body: JSON.stringify(user)});
        } else {
            console.log('Fallo en el inicio de sesión');
            res.json({ success: false, body: JSON.stringify(user)});
        }
    } catch (err) {
        console.error('Error al buscar usuario:', err);
        res.status(500).json({ error: 'Error al procesar la solicitud' });
    }
});

app.post('/createAccount', async (req, res) => {
    const { name, username, email, password } = req.body;
    console.log(`Datos recibidos:\nNombre: ${name}\nUsuario: ${username}\nEmail: ${email}\nContraseña: ${password}`);
    try {
        const userCreate = await User.create({ name, username, email, password });
        console.log('Usuario creado:', userCreate);
        if (userCreate) {
            console.log(userCreate._id);
            res.status(201).json({ success: true, message: 'Usuario creado exitosamente', user: userCreate });
        }
    } catch (error) {
        console.error('Error al crear usuario:', error);
        res.status(500).json({ success: false, message: 'Error al crear usuario', error: error.message });
    }
});

const upload = multer({ storage: storage });

app.post('/createpost', upload.single('image'), async (req, res) => {
    const { body, userId, date } = req.body;
    let image = null; // Inicializamos image como null
    
    if (req.file) {
        image = req.file.filename; // Asignamos el nombre del archivo si existe
    }
  
    console.log(`Datos recibidos ${body}, ${userId}, ${date}, ${image}`);
  
    try {
      if (!body || !userId) {
        console.log("Faltan datos");
        return res.status(400).json({ success: false, message: 'El cuerpo del post y el ID de usuario son requeridos' });
      }
  
      // Guardamos el post en la base de datos
      const postCreate = await PostUser.create({ body, userId, image, date });
      console.log('Post creado:', postCreate);
  
      res.status(201).json({ success: true, message: 'Post creado exitosamente', post: postCreate });
    } catch (error) {
      console.error('Error al crear post:', error);
      res.status(500).json({ success: false, message: 'Error al crear post', error: error.message });
    }
});

// Ruta para obtener todos los posts con información del usuario
app.get('/postsWithUser', async (req, res) => {
    try {
        const posts = await PostUser.aggregate([
            {
                $addFields: {
                    userIdObjectId: {
                        $toObjectId: "$userId"
                    }
                }
            },
            {
                $lookup: {
                    from: 'users', // Nombre de la colección 'users'
                    localField: 'userIdObjectId', // Campo convertido a ObjectId
                    foreignField: '_id', // Campo en 'users' que es el ID de usuario
                    as: 'user' // Nombre del campo que contendrá los datos del usuario
                }
            },
            {
                $unwind: '$user' // Desglosar el array 'user' para obtener un objeto
            },
            {
                $project: {
                    body: 1,
                    date: 1,
                    image: 1,
                    'user.name': 1 // Incluir solo el nombre del usuario
                }
            },
            {
                $sort: {
                    date: -1 // Ordenar por fecha en orden descendente
                }
            }
        ]);
        res.json(posts);
    } catch (err) {
        console.error('Error al obtener posts con usuario:', err);
        res.status(500).json({ error: 'Error al obtener posts con usuario' });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


