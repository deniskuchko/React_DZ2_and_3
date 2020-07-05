import React from 'react';

import ButtonsFilters from '../buttons-filters/ButtonsFilters';

import './search-input.css';

class SearchInput extends React.Component{
  
  render(){
    return(
      <form className="inpurSearch">        
        <input placeholder="type to search" id="qwer"/>
        <ButtonsFilters/>
      </form>
      
    )
  }
    
}

export default SearchInput;