import React from 'react'
import './index.css'

const Header = (props) => {
  return (
    <header className='headContent'>
        <h1>{props.title}</h1>
    </header>
  )
}
Header.defaultProps = {
  title: 'To do List '
}
export default Header