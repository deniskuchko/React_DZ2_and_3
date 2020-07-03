import React from 'react';

import './add-new.css';

function AddNew(){
    return(
        <div className="add">
            <input type="text" placeholder="Add new" defaultValue=""/>
            <button id="add">Add</button>
        </div>
    )
  }

  export default AddNew;