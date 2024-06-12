import React from 'react';
import { FollowCard } from "./FollowCard";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Navbar"; 
import "./../index.css"
import Createpost from './CreatePost';

export function Home({ username, setUser }) {
  const coockie = localStorage.getItem('coockieFill');
  if (coockie == [] || coockie === "" || !coockie) {
    return <Navigate to="/sign-in" />
  }
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

  return (
    <>
        <Navbar setUser={setUser} /> 
        <div className="home-display">
          <div className="home-row-left">
            
          </div>
          <div className='home-row-right'>
          <Createpost />
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
