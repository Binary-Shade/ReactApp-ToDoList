import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa6'


const Input = ({newTask, setNewTask, handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add item</label>
        <input type="text"
            id='addItem'
            ref={inputRef}
            placeholder='Add Tasks'
            value={newTask}
            onChange={(e)=> {setNewTask(e.target.value)}}
            autoFocus
            required
        />
        <button 
            type='submit'
            aria-label='add task'
            onClick={()=> inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Input