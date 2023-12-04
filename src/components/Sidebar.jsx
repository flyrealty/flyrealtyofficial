import React, { useContext, useState } from 'react';
import '../assets/Sidebar.css';
import { SidebarContext } from '../contexts/SidebarContext';
import logo from '../assets/FlyLogoX.png'
import { Link } from 'react-router-dom';

function Sidebar() {
    const {isSidebarOpen, setIsSidebarOpen} = useContext(SidebarContext)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
        <div className={`collapsible-sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
            <div className="sidebarHeading">
                <Link to="/"><img src={logo} alt="Fly Realty Logo" /></Link>
                <button className="toggle-button" onClick={toggleSidebar}>
                    X
                </button>
            </div>
            <ul className="sidebar-menu">
                <li>
                <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
                <li>
                    <Link to="/insights">Insights</Link>
                </li>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/connect">Connect</Link>
                </li> 
            </ul>
        </div>
        {
            isSidebarOpen && 
            <div className="backdrop">
            </div>
        }
        
        </>
    );
}

export default Sidebar;