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
    this.state.label = '';
  }
  render(){
    return(
      <div className="searchInput">
      <form className="inpurSearch"
        onSubmit = {this.onSubmit}
      >        
        <input placeholder="type to search" 
          id="qwer"
          value = {this.state.label}
          onChange = {this.onChange}
          />
      </form>
        <ButtonsFilters 
          allButton = {() => this.props.allButton()} 
          activeButton = {() =>  this.props.activeButton()}
          doneButton = {() =>  this.props.doneButton()}

        />
        
      </div>
      
    )
  }
    
}

export default SearchInput;