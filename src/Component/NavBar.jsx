import React from 'react'
import { Link, NavLink } from 'react-router-dom';


const NavBar=()=>  {
  return (

<div >
    <div className='menu_style'>
        <NavLink activeClassName="active_class" to="/cards">Cards</NavLink>
        
        <NavLink activeClassName="active_class" to="/slide">Slide Images</NavLink>
        <NavLink activeClassName="active_class" to="/profile">Profile</NavLink>

    </div>
    </div>
  )
}

export default NavBar;