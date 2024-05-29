import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__left">
      <img className="navbar__logo" src="" alt="" />
      </div>
      <div className="navbar__center">
        <a href="#">Inicio</a>
        <a href="#">Explorar</a>
        <a href="#">Notificaciones</a>
        <a href="#">Mensajes</a>
        <a href="#">Guardados</a>  
        <a href="#">Comunidades</a>
        <a href="#">Perfil</a>
        <a href="#">Más opciones</a>
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
