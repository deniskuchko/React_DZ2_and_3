import React from 'react';

import './number-of.css';

function NumberOf(props){
    return(
      <div className="numberOf">
          <p><span>{props.done}</span> more to do, </p>
          <p><span>{props.toDo}</span> done</p>
      </div>
    )
  }

  export default NumberOf;