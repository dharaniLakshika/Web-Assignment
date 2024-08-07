import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { BsFillBellFill } from 'react-icons/bs';
import './Header.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { GoGear } from "react-icons/go";

import gear from '../Assets/gear.png';
import headerlogin from '../Assets/headerlogin.png'
function Header() {
  return (
    <header className='header'>
      <div className='header-left'>
        <div className="search-container">
          <span className="search-icon">
            <BsSearch />
          </span>
          <input className="input" type="text" placeholder="Search" />
        </div>
      </div>
      <div className='header-right'>
        <BsFillEnvelopeFill className='icon circle-icon' />
     
        <GoGear className="gear circle-icon" />
        <BsFillBellFill className='icon circle-icon' />
        <img src={headerlogin} className="gear circle-icon" />
      </div>
    
    </header>
  );
}

export default Header;
