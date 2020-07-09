import React from 'react';

import './buttons-filters.css';

const RESET = {
  All: "all_tasks",
  Important: "important_tasks",
  Done: "done_tasks"
}

class ButtonsFilters extends React.Component{
state ={...RESET, All: "all_tasks checked"};

filterToggle = ({target: {className}}) => {
  for(const key in RESET){
    if(className.includes(RESET[key])){
      const temp = RESET[key];
      this.props.filterTasks(temp);
      this.setState({...RESET, [key] : `${temp} checked`})
    }
  }
}
  render(){

    /* let clickAll = () => {
      this.props.allButton()
    }
    let clickActive = () => {
      this.props.activeButton()
    }
    let clickDone = () => {
      this.props.doneButton()
    } */

    const btnArr = [];
    for(const key in this.state){
    btnArr.push(<button className={this.state[key]}>{key}</button>)
    }
    return(
      <div className="buttonsFilters" onClick ={this.filterToggle}>
         {/*  <button id="all" onClick = {() => {clickAll()}}>All</button>
          <button id="active" onClick = {() => {clickActive()}}>Active</button>
          <button id="done" onClick = {() => {clickDone()}}>Done</button> */}
          {btnArr}
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