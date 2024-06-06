import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <img className="navbar__logo" src="\treedevisIcon.svg" alt="" />
      </div>
      <div className="navbar__center">
        <button><i className="fas fa-home"></i> Inicio</button>
        <button><i className="fas fa-search"></i> Explorar</button>
        <button><i className="fas fa-bell"></i> Notificaciones</button>
        <button><i className="fas fa-envelope"></i> Mensajes</button>
        <button><i className="fas fa-bookmark"></i> Guardados</button>
        <button><i className="fas fa-users"></i> Comunidades</button>
        <button><i className="fas fa-user"></i> Perfil</button>
        <button><i className="fas fa-ellipsis-h"></i> Más</button>
        <button onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Salir</button>
      </div>
    </nav>
  );
}

export default Navbar;
