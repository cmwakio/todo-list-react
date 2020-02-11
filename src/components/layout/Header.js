import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link> 
      | <Link style={linkStyle} to="/inputfocus">Input Focus</Link>
      | <Link style={linkStyle} to="/todotest">Todo Test</Link>
      | <Link style={linkStyle} to="/inputchange">Input Change</Link>
      | <Link style={linkStyle} to="/birthday">Birthday</Link>
    </header>
  )
}

const headerStyle = {
  background: '#333',
  color:  '#fff',
  textAlign: 'center',
  padding: '10px'
}

const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}

export default Header;
