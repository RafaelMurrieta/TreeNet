import React from 'react';
import { FollowCard } from "./FollowCard";
import Navbar from "./Navbar"; 
import "./../index.css"
import Search from './Search'; 
import { useNavigate } from "react-router-dom";

export function Home({ user, setUser }) {
  const USERS = [
    {
      user: 'Valorant',
      userName: 'Valorant',
      initialFollow: true
    },
    {
      user: 'Midudev',
      userName: 'Midudev',
      initialFollow: false
    },
    {
      user: 'ElMariana',
      userName: 'elmarianaa',
      initialFollow: true
    }
  ];
  const navigate= useNavigate();

  const handleLogout = () => {
    setUser([]);
    navigate("/");
  };

  return (
    <>
        <Navbar /> 
        <div className="home-display">
        <div  className="home-row-left">
            <h1>Bienvenido!</h1>
            <h2>{user}</h2>
            <button className='button-fixed' onClick={handleLogout}>Cerrar sesion</button>
        </div>
        <div className='home-row-right'>
          <Search />
        <section className="container-followingcard">
            {USERS.map(({ user, userName, initialFollow }) => (
            <FollowCard 
                user={user} 
                userName={userName} 
                initialFollow={initialFollow} 
                key={userName} 
            />
            ))}
        </section>
        </div>
        </div>
    </>
  );
}
