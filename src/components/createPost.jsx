import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import './createpost.css';

const createPost = () => {
  const [isOption, setIsOption] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);

  const toggleOption = () => {
    setIsOption(!isOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Título:", title);
    console.log("Contenido:", content);
    console.log("Imagen:", image);
    // Aquí puedes agregar lógica para enviar el formulario
  };

  return (
    <div>
      <button className="px-4 py-2 rounded-md button-fixed" onClick={toggleOption}>
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
                  placeholder="¿Que estas pensando?"
                  className="input-post-text"
                />
              </div>
              <div className="">
                <label htmlFor="image">Image</label>
                <input id="image" type="file" onChange={(e) => setImage(e.target.files[0])} />
              </div>
            </div>
            <div>
              <button onClick={handleSubmit} className="button-fixed">
                Publish
              </button>
            </div>
          </div>
        </main>
      </Modal>
    </div>
  );
};

export default createPost;
