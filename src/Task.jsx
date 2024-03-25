import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const Task = ({item, handleChange, handleDelete}) => {
  return (
    <li className='item'>
        <input 
            type="checkbox" 
            checked = {item.checked}
            onChange={()=>{handleChange(item.id)}}
            />
            <label
              style={(item.checked) ? {textDecoration: "line-through"} : null}
              onDoubleClick={()=>handleChange(item.id)}
            >{item.task}</label>
            <FaTrashCan
            role='button'
            tabIndex='0'
            onClick={()=>handleDelete(item.id)}
            aria-label={`Delete ${item.task}`}
            />
    </li>
  )
}

export default Task