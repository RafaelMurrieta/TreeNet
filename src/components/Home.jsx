import React from 'react';
import { FollowCard } from "./FollowCard";
import Navbar from "./Navbar"; 
import "./../index.css"

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

  const handleLogout = () => {
    setUser([]);
  };

  return (
    <>
        <Navbar /> {}
        <div className="home-display">
            <div className="home-row-left">
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
        <div>
            <h1>Bienvenido!</h1>
            <h2>{user}</h2>
            <button onClick={handleLogout}>Cerrar sesion</button>
        </div>
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
    </>
  );
}
