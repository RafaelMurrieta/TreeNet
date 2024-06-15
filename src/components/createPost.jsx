import React, { useState } from 'react';
import Modal from 'react-modal';
import './createpost.css';

const Createpost = () => {
  const [isOption, setIsOption] = useState(false);
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const toggleOption = () => {
    setIsOption(!isOption);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImage(null);
      setImagePreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = localStorage.getItem('coockieFill'); // Asegúrate de que 'coockieFill' sea correcto
    console.log("Contenido:", content);
    console.log("ID:", id);
    console.log("Imagen:", image);
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours(); 
    const minute = date.getMinutes();  
    const second = date.getSeconds();
    console.log(year + "/" + month + "/" + day + " " + hour + ":" + minute+":"+second);
    const newDate = year + "/" + month + "/" + day + " " + hour + ":" + minute+":"+second;

  
    if (!content.trim() || !id) {
      alert("El contenido o la identificación de usuario están vacíos");
      return;
    }
  
    try {
      const response = await fetch('http://localhost:3001/createpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: content, userId: id, image: image, date: newDate }),
      });
      const result = await response.json();
      if (result.success) {
        console.log("Post creado exitosamente:", result);
      } else {
        console.log("Error al crear post:", result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Hubo un error al conectar con el servidor");
    }
  };
  
  return (
    <div>
    <button className="button-fixed" onClick={toggleOption}>
      {isOption ? "Cancelar" : "Crear una publicación"}
    </button>
  

      <Modal
        isOpen={isOption}
        onRequestClose={toggleOption}
        contentLabel="Create Post Modal"
        ariaHideApp={false}
        className="customModal"
        overlayClassName="customOverlay"
      >
        <div className='navb-button'>
          <button className='btnCloseModal' onClick={toggleOption}>
            <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m37.66 130.34a8 8 0 0 1-11.32 11.32L128 139.31l-26.34 26.35a8 8 0 0 1-11.32-11.32L116.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32L128 116.69l26.34-26.35a8 8 0 0 1 11.32 11.32L139.31 128Z"/></svg>
          </button>
        </div>
        <main className="form-post">
          <div className="form-body">
            <div className='title-body-form'>
              <h2>Create Post</h2>
            </div>
            <div className="form-body-post">
              <div className="body-post">
                <input
                  data-text="true"
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="¿Qué estás pensando?"
                  className="input-post-text"
                />
              </div>
              <div className="">
                <label htmlFor="image" className='labelImg'>
                  {imagePreview ? (
                    <img src={imagePreview} alt="Vista previa" className="image-preview" />
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm1-4h12l-3.75-5l-3 4L9 13z"/></svg>
                  )}
                  {imagePreview ? (
                    <p>Imagen cargada con exito</p>
                  ) : (
                    <p>Sube una imagen</p>
                  )}
                </label>
                <input className='inputImage' id="image" type="file" onChange={handleImageChange} />
              </div>
            </div>
            <div className='form-bottom-post'>
              <button onClick={handleSubmit} className="button-fixed">
                Publicar
              </button>
            </div>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default Createpost;
