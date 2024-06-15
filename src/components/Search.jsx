import React from 'react';
import './../index.css';

const Search = () => {
  return (
    <div className="search-container">
      <div className="search-input-container">
        <input type="search" className='search-input' placeholder="Buscar" />
        <button className='search-button'><i className="fas fa-search search-icon"></i></button>
      </div>
      <div className="posts-container">
      </div>
    </div>
  );
};
export default Search;
