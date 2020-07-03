import React from 'react';

import './todo-item.css';

class TodoItem extends React.Component {
  constructor() {
    super();
    this.state = {
      doneOk: false,
      importantOk: false,
    }
  }
  render(){
    const {message, onDelete, important} = this.props;
    let classNameText = "task-text";
    
    
    let clickHandler = () => {
      this.setState(
        (prevState) => {
          return{
            doneOk: !prevState.doneOk
          };
        }
      )
    };
    
    let removeHandler = () => {
      this.props.onDelete();
      console.log('hi')
    };

    let ckickImportant = () => {
      this.setState(
        (prevColor) => {
          
          return{
            importantOk: !prevColor.important
          };
        }
      )
    };
    let importantHandler = () => {
      ckickImportant();
      this.props.important();
    };
    
    if(this.state.doneOk){
      classNameText += " task_is_done";
    }

    if(this.state.importantOk){
      classNameText += " task_is_important";
    }
    
      return(
       <div className = "todo-item"> 
        <p 
            className = {classNameText} 
            onClick={() => {
              clickHandler();
            }}>
              {message}
        </p>
        <div className = "task-item">
          <button id="delete" >
            <i className="far fa-trash-alt"
              onClick = {() => {
              removeHandler()}}>
            </i>
          </button>
          <button id="important">
            <i className="fas fa-exclamation" 
            onClick = {() => {
              importantHandler()}}>
            </i>
          </button>
        </div>
        </div>
      ) 
      
  }
}

export default TodoItem;