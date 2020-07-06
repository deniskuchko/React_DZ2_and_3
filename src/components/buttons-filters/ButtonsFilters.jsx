import React from 'react';

import './buttons-filters.css';


class ButtonsFilters extends React.Component{

  render(){

    let clickAll = () => {
      this.props.allButton()
    }
    let clickActive = () => {
      this.props.activeButton()
    }
    let clickDone = () => {
      this.props.doneButton()
    }
    return(
      <div className="buttonsFilters">
          <button id="all" onClick = {() => {clickAll()}}>All</button>
          <button id="active" onClick = {() => {clickActive()}}>Active</button>
          <button id="done" onClick = {() => {clickDone()}}>Done</button>
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