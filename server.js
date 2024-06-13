import express, { response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import { type } from 'os';

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
    image: { type: String, required: false }
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

app.post('/createpost', async (req, res) => {
    const { body, userId, image } = req.body; 
    console.log(`Datos recibidos ${body, userId}, ${image}`);
    console.log(req.body);
    try {
        if (!body || !userId) {
            console.log("Faltan datos");
            return res.status(400).json({ success: false, message: 'El cuerpo del post y el ID de usuario son requeridos' });
        }
        const postCreate = await PostUser.create({ body, userId, image });
        console.log('Post creado:', postCreate);

        res.status(201).json({ success: true, message: 'Post creado exitosamente', post: postCreate });
    } catch (error) {
        console.error('Error al crear post:', error);
        res.status(500).json({ success: false, message: 'Error al crear post', error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});


