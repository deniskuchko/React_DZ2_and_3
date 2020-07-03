import React from 'react';

import ButtonsFilters from '../buttons-filters/ButtonsFilters';

import './search-input.css';


function SearchInput(){
    return(
      <div className="inpurSearch">        
        <input placeholder="type to search" id="qwer"/>
        <ButtonsFilters/>
      </div>
      
    )
}

export default SearchInput;