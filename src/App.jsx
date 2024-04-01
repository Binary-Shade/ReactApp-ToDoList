import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './index.css';
import { useState, useEffect } from 'react';
import Input from './Input';
import SearchBox from './SearchBox';


function App() {

  // created use state for task items
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('') //set new task
  const [search, setSearch] = useState('') //search item use state

  const [fetchError, setFetch] = useState(null) // usestate to handle fetch error
  const [isLoading, setLoader] = useState(true) // usestate to handle loading time

const API = 'http://localhost:4343/items'
useEffect(()=>{
  const getValues = async () => {
    try {
      const response = await fetch(API)
      if(!response.ok) throw Error("data not received");
      const listItems = await response.json()
      setItems(listItems)
      setFetch(null)
    }catch(err){
      setFetch(err.message)
    }
    finally{
      setLoader(false)
    }
  }
 getValues()
  
}, [])

const addTask = (task) => {
  const id = items.length ? items[items.length -1 ].id + 1 : 1;
  const myNewItem= {id, checked:false, task}
  const newList = [...items, myNewItem]
  setItems(newList)
}

const handleChange = (id) => {
  const newList = items.map((item)=> item.id === id? {...item,checked: !item.checked}: item)
  // spread operator to use default items but change something new
  setItems(newList)
}

const handleDelete = (id) => {
  const newList = items.filter((item)=> item.id !== id)
  // filter out something from a array
  setItems(newList)
  // localStorage.setItem('tasks', JSON.stringify(newList))
}

const handleSubmit = (e) => {
  e.preventDefault()
  addTask(newTask)
  setNewTask('')

}


  return(
    <div>
      <Header />
        <Input
          newTask = {newTask} 
          setNewTask = {setNewTask}
          handleSubmit = {handleSubmit}
        />
        <SearchBox 
          search = {search}
          setSearch = {setSearch}
        />
      <main>
        {fetchError && <p>{`Error: ${fetchError}`}</p>}
        {isLoading && <p>content is loading ...</p>}
        {!isLoading && <Content
        items = {items.filter(item=> ((item.task).toLowerCase()).includes(search.toLowerCase()))}
        handleChange = {handleChange}
        handleDelete = {handleDelete}
      />}
      </main>
      <Footer 
        items = {items}
      />
    </div>
  )

}

export default App
