import React from 'react';


import './search-input.css';

const SearchInput = ( {onSearch} ) => {
  return(
    <input 
      type="text"
      placeholder="type to search" 
      id="searchfield"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchInput;