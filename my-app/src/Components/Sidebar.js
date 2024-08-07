import React from 'react';
import { RiBarChartBoxLine } from "react-icons/ri";
import { PiCalendarCheckLight, PiCardholder } from "react-icons/pi";
import { FaRegClipboard } from "react-icons/fa";
import Grid from '../Assets/grid.png';
import Home from '../Assets/home.png';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside id="sidebar">
      <div className='icon'><img src={Grid} style={{ width: "30px", height: "25px" }} alt="Grid" /></div>
      <div className='icon'><img src={Home} style={{ paddingTop: "30px", width: "30px", height: "25px" }} alt="Home" /></div>
      <div className='icon'><RiBarChartBoxLine /></div>
      <div className='icon'><PiCalendarCheckLight /></div>
      <div className='icon'><PiCardholder /></div>
      <div className='icon'><FaRegClipboard /></div>
    </aside>
  );
}

export default Sidebar;
