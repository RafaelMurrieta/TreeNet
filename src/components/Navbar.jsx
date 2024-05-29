import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
      <img className="navbar__logo" src="" alt="" />
      </div>
      <div className="navbar__center">
        <button href="#">Inicio</button>
        <button href="#">Explorar</button>
        <button href="#">Notificaciones</button>
        <button href="#">Mensajes</button>
        <button href="#">Guardados</button>  
        <button href="#">Comunidades</button>
        <button href="#">Perfil</button>
        <button href="#">Más opciones</button>
      </div>
      <div className="navbar__right">
        <i className="far fa-search"></i>
        <i className="far fa-user"></i>
        <i className="far fa-envelope"></i>
      </div>
    </nav>
  );
}
    
export default Navbar;
