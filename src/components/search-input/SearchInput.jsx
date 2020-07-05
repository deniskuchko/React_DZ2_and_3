import React from 'react';

import ButtonsFilters from '../buttons-filters/ButtonsFilters';

import './search-input.css';

class SearchInput extends React.Component{
  state = {
    label: '',
  }
  onChange = (e) => {
    console.log(e.target.value)
    this.setState({
      label: e.target.value,
    })
  }
  onSubmit = (e) => {
    e.preventDefault();
    /* onChange(); */
    this.props.onSearch(this.state.label);
    console.log((this.state.label))
  }
  render(){
    return(
      <form className="inpurSearch"
      onSubmit = {this.onSubmit}
      >        
        <input placeholder="type to search" 
          id="qwer"
          value = {this.state.label}
          onChange = {this.onChange}
          />
        <ButtonsFilters 
          /* allButton = {() => allButton()}
          activeButton = {() => activeButton()}
          doneButton = {() => doneButton()} */

        />
      </form>
      
    )
  }
    
}

export default SearchInput;