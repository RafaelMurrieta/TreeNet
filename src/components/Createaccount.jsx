// Createaccount.jsx
import React from 'react';
import './Formulario.css';
import Image from './Image'; 

export function Createaccount() {

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="section-form">
        <div>
          <div>
            <h1>TREENET</h1>
            <p>Para poder ingresar necesita de una cuenta</p>
          </div>
          <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Nombre de usuario" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit">Crear cuenta</button>
          </form>
        </div>
      </section>
      <Image /> 
    </>
  );
}
