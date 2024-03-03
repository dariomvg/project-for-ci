import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <header>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/counter">counter</Link>
        </nav>
    </header>

  )
}

export default Menu