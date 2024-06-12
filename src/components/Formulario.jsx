    import React, { useState } from "react";
    import "./Formulario.css";
    import { useNavigate } from "react-router-dom";
    import { Navigate } from "react-router-dom";
    import Imagen from "./Image.jsx";

    export function Formulario({ setUser }) {
        const [nombre, setNombre] = useState("");
        const [contraseña, setContraseña] = useState("");
        const [error, setError] = useState(false);
        const [loginError, setLoginError] = useState(false);
        const navigate = useNavigate();

        const handleSubmit = async (e) => {
            e.preventDefault();
            if (nombre === "" || contraseña === "") {
                setError(true);
                return;
            }
            setError(false);

            
            const response = await fetch('http://localhost:3001/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: nombre, password: contraseña }),
            });
            const result = await response.json();
            if (result.success) {
                const data = JSON.parse(result.body);
                const nameuser = data.name;
                const id = data._id;
                localStorage.setItem('coockieFill', id);
                setUser([nameuser]);
                navigate("/home");
            } else {
                setLoginError(true);
            }
        };

        return (
            <>
                <section className="section-form">
                    <div>
                        <div>
                            <h1 className="text-8xl fonttitle">TREENET</h1>
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
                            <button className="button-fixed">Iniciar sesión</button>
                            <a href="/sing-create"><p>¿No tienes cuenta? Crea una</p></a>
                        </form>
                        {error && <p className="validation-camps">Todos los campos son obligatorios</p>}
                        {loginError && <p className="validation-camps">Usuario no encontrado</p>}
                    </div>
                </section>
                <Imagen />
            </>
        );
    }
