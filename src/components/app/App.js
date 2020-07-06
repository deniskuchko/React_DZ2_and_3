import React from 'react';

import Header from '../app-headers/Header';
import SearchInput from '../search-input/SearchInput.jsx';
import TodoList from '../todo-list/Todolist';
import NumberOf from '../number-of/NumberOf';
import AddNew from '../add-new/AddNew';

import './App.css';

class App extends React.Component{
  maxId = 50;
  state = {
    todolist: [
      {message: "Task 1", important: false, done: false, id: 1},
      {message: "Task 2", important: false, done: false, id: 2},
      {message: "Task 3", important: false, done: false, id: 3},
    ]
  }

  onDelete = (id) => {
    this.setState((prev) => {
      const todos = prev.todolist.filter((todo) => {
        return todo.id !== id
      });
      return{
        todolist: todos,
      };
    });
  };

  onAdded = (message) => {
    this.setState(prev => {
      return {
        todolist: [
          ...prev.todolist,
          {message, important: false, done: false, id: ++this.maxId},
        ]
      }
    })
  }
  onSearch = (message) =>{
    this.setState((prev) => {
      const todos = prev.todolist.filter((todo) => {
        return todo.message.toLowerCase().includes(message.toLowerCase())
      })
      return {
        todolist: todos
      }
    })
    
    /* this.setState( prev => {
      return{

      } 
    })*/
  }
  onImportant = (id) => {
    this.setState(
      (prevState) => {
        let todos = prevState.todolist.map(todo => {
          if (todo.id === id){
            todo.important = !todo.important;
          }
          return todo
        })
        return {
          todolist: todos
        }
      }
    )
  }
  onToogle = (id) => {
    this.setState(
      (prevState) => {
        let todos = prevState.todolist.map(todo => {
          if(todo.id === id){
            todo.done = !todo.done;
          }
          return todo;
        })
        return {
          todolist: todos
        };
      }
    ) 
  }
  allButton  = () => {
    
    this.setState(prev => {
      return {
        todolist: [...prev.todolist,]
    }
  })
    /* console.log ( prev.todolist); */
  } 
  activeButton = () => {
    console.log ('active');
    this.setState(prev =>{
      const todos = prev.todolist.filter(todo => {
        return todo.important;
      })
      return {
        todolist: todos,
      }
    })
  }
  doneButton = () => {
    console.log ('done');
    this.setState((prev) => {
      const todos = prev.todolist.filter((todo) => {
        return todo.done 
      });
      return{
        todolist: todos,
      };
    });
  }
  
  render(){
    const { todolist} = this.state;
    const doneResult = todolist.filter(todo => !todo.done).length;
    const activeResult = todolist.filter(todo => todo.done).length;
    return (
      <div className="App">
        <Header/>
        <NumberOf done = {doneResult} toDo={activeResult}/>
        <SearchInput 
          onSearch ={this.onSearch}  
          allButton = {this.allButton} 
          activeButton = {this.activeButton} 
          doneButton = {this.doneButton}
        />
        <TodoList 
          todos = {todolist}
          onDelete={this.onDelete} 
          onImportant={this.onImportant} 
          onToogle = {this.onToogle}/* addNewTask={this.addNewTask} */
        />
        <AddNew onAdded={this.onAdded}/>
      </div>
    );
  }
}


export default App;
