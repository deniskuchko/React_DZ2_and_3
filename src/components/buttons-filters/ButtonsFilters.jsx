import React from 'react';

import './buttons-filters.css';


class ButtonsFilters extends React.Component{
  render(){
    return(
      <div className="buttonsFilters">
          <button id="all">All</button>
          <button id="active">Active</button>
          <button id="done">Done</button>
      </div>
    )
  }
}

/* function ButtonsFilters(){
    return(
      <div className="buttonsFilters">
          <button id="all">All</button>
          <button id="active">Active</button>
          <button id="done">Done</button>
      </div>
    )
} */

  export default ButtonsFilters;