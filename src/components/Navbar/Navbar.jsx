import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    
    <nav className={s.nav}>
        <ul>
          <li ><NavLink className={({ isActive }) => isActive && s.active} to="/profile">Profile</NavLink></li>
          <li ><NavLink className={({ isActive }) => isActive && s.active} to="/users">Users</NavLink></li>
          <li ><NavLink className={({ isActive }) => isActive && s.active} to="/dialogs">Messages</NavLink></li>
          <li ><NavLink className={({ isActive }) => isActive && s.active} to="/news">News</NavLink></li>
          <li ><NavLink className={({ isActive }) => isActive && s.active} to="/music">Music</NavLink></li>
          <li className={s.settings}><NavLink className={({ isActive }) => isActive && s.active} to="settings" >Settings</NavLink></li>
        </ul>
        <div>
          {/* <Friends />   */}
        </div>
      </nav>
  );
}



export default Navbar;