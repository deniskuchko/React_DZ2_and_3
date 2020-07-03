import React from 'react';

import TodoItem from '../todo-item/TodoItem';

import './todo-list.css';


const TodoList = ({todos, onDelete, important}) => {
  const elements = todos.map((item) => {
    const {id, ...itemProps} = item;
    return(  
      
      <TodoItem  {...itemProps} key = {id} onDelete={() => onDelete(id) } important = {() => {important(id)}}/>        
          
    );
  });

    return <div className = "task-table">{elements}</div>;
  }
  
export default TodoList;
