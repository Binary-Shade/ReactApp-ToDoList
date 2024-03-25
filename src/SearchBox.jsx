import React from 'react'
import './index.css'

const SearchBox = ({search, setSearch}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}> 
        <label htmlFor="search">
            search item
        </label>
        <input 
            type="text"
            id='search'
            placeholder='search task'
            role='searchbox'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
        />
    </form>
  )
}

export default SearchBox