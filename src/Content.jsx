import React from 'react'
import './index.css';
import List from './List';

// avoid using objects inside usestate
// use as a array object

const Content = ({items, handleChange, handleDelete}) => {
  
return (
    <>
      {items.length ? (
        < List 
          items = {items}
          handleChange = {handleChange}
          handleDelete = {handleDelete}
        />
        ) : (
          <p>No Tasks to finish </p>
        )
}
    </>
)
}

export default Content