import React from 'react'
import { FaPlus } from 'react-icons/fa6'

const Input = ({newTask, setNewTask, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add item</label>
        <input type="text"
            id='addItem'
            placeholder='Add Tasks'
            value={newTask}
            onChange={(e)=> {setNewTask(e.target.value)}}
            autoFocus
            required
        />
        <button 
            type='submit'
            aria-label='add task'
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default Input