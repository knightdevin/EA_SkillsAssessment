import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (/*{handleClick, isLoggedIn}*/) => (
  <div className="navBar" style={{fontSize: '18px'}}>
    <nav>
      <Link to="/" className="navLink">
        Home
      </Link>
      <Link to="/school" className="navLink">
        Charts
      </Link>
    </nav>
    <hr />
  </div>
)

export default Navbar
