import React from 'react';
import './navbar.css';
import { FaCoins } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <FaCoins className='icon'/>
            <h1>Coin <span className='purple'>Tracker</span></h1>
        </div>
    </div>
  )
}

export default Navbar