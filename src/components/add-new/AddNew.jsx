import React from 'react';

import './add-new.css';

class AddNew extends React.Component{
    state = {
        label: ''
      }
      onChange = (e) => {
        this.setState({
          label: e.target.value,
        })
      }
      onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
          label: '',
        })
      }

    render(){
        return(
            <form className="add"
            onSubmit = {this.onSubmit}>
                <input type="text" 
                  placeholder="Add new" 
                  value = {this.state.label} 
                  onChange = {this.onChange}
                  />
                <button id="add" >Add</button>
            </form>
        )
    }
    
  }

  export default AddNew;