import React from 'react';
// import './card.css';

const Card = ({name, course}) => {
  // const listItems = subtasks.map((subtask) =>  <li>{subtask}</li>);
  return (
      <div>
        {name}: {course}
        {/* <ul>{listItems}</ul> */}
      </div>  
  )
}

export default Card