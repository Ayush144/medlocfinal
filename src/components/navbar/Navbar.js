import React, { useState } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import { FaRegTimesCircle } from 'react-icons/fa';
import { BsFillHouseFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { useEffect } from 'react';

const Navbar = () => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const [variable, setvar] = useState("Login");
  let userlog = true;
  const items = JSON.parse(localStorage.getItem('user'));


  useEffect(() => {
    if (items !== null) {
      setvar("Logout");

    }


  }, [items]);
  function deletetoken() {

    if (items !== null) {
      localStorage.removeItem("user");
      setvar("Login");
    }
  }


  console.log(items);
  return (
    <div className='navbar'>
      <div className='container'>
        <h1><Link className="alink" to="/home"><span><BsFillHouseFill />MED</span>Locator</Link></h1>
        <button className='btn'><Link className="alink" to="/" onClick={deletetoken}>{variable}</Link></button>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li><Link className="alink" to="/products">Products</Link></li>
          {/*<li><Link className="alink" to="/register">Register</Link></li>
              <li><Link className="alink" to="/login">Login</Link></li>
         */}
          <li><Link className="alink" to="/about-us">About</Link></li>
          <li><a href='https://www.google.com/'>Contact</a></li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
        </div>
      </div>
    </div>
  )
}

export default Navbar