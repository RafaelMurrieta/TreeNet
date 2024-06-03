import React, { useState } from "react"; 
import "./Formulario.css";
import { useNavigate } from "react-router-dom";
import Imagen from "./Image.jsx";

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }
        setError(false);
        setUser([nombre]);
        navigate("/home");
    };

    return (
        <>
            <section className="section-form">
                <div>
                    <div>
                    {/* <img src="treedevisIcon.svg" alt="" /> */}
                        <h1>TREENET</h1>
                        
                    </div>
                    <form className="formulario" onSubmit={handleSubmit}>
                        <input type="email" placeholder="Correo electrónico"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                        />
                        <input type="password" placeholder="Contraseña"
                            value={contraseña}
                            onChange={e => setContraseña(e.target.value)}
                        />
                        <button>Iniciar sesión</button>
                        <a href="/sing-create"><p>NO TIENES CUENTA, CREA UNA</p></a>
                    </form>
                    {error && <p className="validation-camps">Todos los campos son obligatorios</p>}
                </div>
            </section>
            <Imagen />
        </>
    );
}
