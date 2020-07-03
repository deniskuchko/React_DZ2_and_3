import React from 'react';

import Header from '../app-headers/Header';
import SearchInput from '../search-input/SearchInput.jsx';
import TodoList from '../todo-list/Todolist';
import NumberOf from '../number-of/NumberOf';
import AddNew from '../add-new/AddNew';

import './App.css';

class App extends React.Component{
  state = {
    todolist: [
      {message: "Task 1", important: false, done: false, id: 1},
      {message: "Task 2", important: false, done: false, id: 2},
      {message: "Task 3", important: false, done: false, id: 3},
    ]
  }

  onDelete(id){
    console.log(id);
  }
  important(id){
    console.log(id);
  }

  render(){
    const { todolist} = this.state;

    return (
      <div className="App">
        <Header/>
        <NumberOf/>
        <SearchInput/>
        <TodoList todos = {todolist} onDelete={this.onDelete} important={this.important}/>
        <AddNew/>
      </div>
    );
  }
}


export default App;
