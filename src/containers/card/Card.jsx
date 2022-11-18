import React from 'react';
// import './card.css';

// const listItems = (subtasks) => subtasks.map((subtask) =>  <li>{subtask}</li>);

const Card = ({name, course}) => {
  
  return (
      <div>
        {name}: {course}
        {/* <ul>{listItems(subtasks)}</ul> */}
      </div>  
  )
}

export default Card