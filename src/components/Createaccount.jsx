import React, { useState } from 'react';
import './Formulario.css';
import Image from './Image'; 
import { useNavigate } from 'react-router-dom';

export function Createaccount() {
  // Define los estados en la parte superior del componente
  const [name, setNameStatus] = useState("");
  const [createUsername, setUsernameStatus] = useState("");
  const [email, setEmailStatus] = useState("");
  const [password, setPasswordStatus] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || createUsername === "" || email === "" || password === "") {
      setError(true);
    } else {
      setError(false);
      const response = await fetch('http://localhost:3001/createAccount', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: name, username: createUsername, email: email, password: password }),
    });
        const result = await response.json();
        console.log(result);
        if (result.success) {
          const data = result.user
          console.log(data);
          const id = data._id;
          localStorage.setItem('coockieFill', id);
          // setUser([nameuser]);
          navigate("/home");
        }else{
          setError(true);
        }
    }
  };

  return (
    <>
      <section className="section-form create">
        <div className='container-createAccount'>
          <div className='title-form'>
            <h1 className='fonttitle'>TREENET</h1>
            <p className='text-cyan-900'> Para poder ingresar necesita de una cuenta</p>
          </div>
          <form className="formulario" onSubmit={handleSubmit}>
            <input type="text" name='name' value={name} onChange={e => setNameStatus(e.target.value)} placeholder="Nombre"/>
            <input type="text" name='username' value={createUsername} onChange={e => setUsernameStatus(e.target.value)} placeholder="Nombre de usuario"/>
            <input type="email" name='email' value={email} onChange={e => setEmailStatus(e.target.value)} placeholder="Correo electrónico"/>
            <input type="password" name='password' value={password} onChange={e => setPasswordStatus(e.target.value)} placeholder="Contraseña"/>
            <a href="/sign-in"><p>¿Ya tiene cuenta? Inicie sesion aqui</p></a>
            {error && <p className="validation-camps">Todos los campos son obligatorios</p>}
            <button type="submit" className='button-fixed'>Crear cuenta</button>
          </form>
        </div>
      </section>
      <Image /> 
    </>
  );
}
