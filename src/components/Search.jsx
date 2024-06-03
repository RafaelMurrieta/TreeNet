import React from 'react';
import './../index.css'

const Search = () => {
  return (
    <div className="search-container">
      <input type="search" className='search-input' placeholder="Buscar" />
      <button className='button-fixed'><i className="fas fa-search search-icon"></i></button>
    </div>
  );
};

export default Search;
