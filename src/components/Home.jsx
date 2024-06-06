import React from 'react';
import { FollowCard } from "./FollowCard";
import Navbar from "./Navbar"; 
import "./../index.css"
import Search from './Search'; 

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

  return (
    <>
        <Navbar setUser={setUser} /> 
        <div className="home-display">
          <div className="home-row-left"> 
          <Search/>
          </div>
          <div className='home-row-right'>
            
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
