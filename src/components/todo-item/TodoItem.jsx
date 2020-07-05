import React from 'react';

import './todo-item.css';

class TodoItem extends React.Component {
  constructor() {
    super();
    /* this.state = {
      importantOk: false,
    } */
  }
  render(){
    const {message, done, important} = this.props;
    let classNameText = "task-text";
    
    
    let clickHandler = () => {
      this.props.onToogle();
      /* this.setState(
        (prevState) => {
          return{
            done: !prevState.done
          };
        }
      ) */
    };
    
    let removeHandler = () => {
      this.props.onDelete();
    };

    let ckickImportant = () => {
      this.props.onImportant();
      /* this.setState(
        (prevColor) => {
          
          return{
            importantOk: !prevColor.important
            
          };
        }
      ) */
    };
    /* let importantHandler = () => {
      ckickImportant();
      this.props.important();
    }; */
    
    if(done){
      classNameText += " task_is_done";
    }

    if(important){
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
          
            <i className="far fa-trash-alt"
              id="delete"
              onClick = {() => {
              removeHandler()}}>
            </i>
          
          
            <i className="fas fa-exclamation"
            id="important" 
            onClick = {() => {
              ckickImportant()}}>
            </i>
          
        </div>
      </div>
      ) 
      
  }
}

export default TodoItem;