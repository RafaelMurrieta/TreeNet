import React from 'react';

const Image = () => {
  return (
        <img 
            src="https://source.unsplash.com/random" 
            alt="Imagen lateral" 
            className='hidden xl:block h-screen w-1/2 object-cover bg-no-repeat mainImg' 
        />
  );
}

export default Image;
