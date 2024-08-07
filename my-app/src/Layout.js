import React from 'react';
import './Layout.css';
import MainContent from './Components/MainContent';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';

const Layout = () => {
  return (
    <div className="grid-container">
      <header className="header"><Header/></header>
      <aside className="sidebar"><Sidebar/></aside>
      <main className="main-content"><MainContent/></main>
    </div>
  );
};

export default Layout;
