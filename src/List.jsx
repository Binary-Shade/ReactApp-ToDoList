import React from 'react'
import './index.css';
import Task from './Task';

const List = ({items, handleChange, handleDelete}) => {
  return (
    <div>
        <ul className='list'>
          {
            items.map((item) => (
              <Task 
                item = {item}
                key={item.id}
                handleChange = {handleChange}
                handleDelete = {handleDelete}
              />
            ))
          }
        </ul>
    </div>
  )
}

export default List