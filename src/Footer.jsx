import React from 'react'

const Footer = (props) => {
  return (
    <footer>No of Tasks : <span>{props.items.length}</span> </footer>
  )
}

export default Footer