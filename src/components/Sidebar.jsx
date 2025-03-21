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
              
            </div>
            <div className="sidebar-menu">
                <Link to="/" onClick={toggleSidebar}>Home</Link>
                <Link to="/business" onClick={toggleSidebar}>Services</Link>
                <Link to="/projects" onClick={toggleSidebar}>Projects</Link>
                {/* <Link to="/insights" onClick={toggleSidebar}>Insights</Link>*/}
                <Link to="/about" onClick={toggleSidebar}>About Us</Link>
                <Link to="/careers" onClick={toggleSidebar}>Careers</Link>
                <Link to="/connect" onClick={toggleSidebar}>Connect</Link>
               
            </div>
            <button className="toggle-button" onClick={toggleSidebar}>
           <h3> <b>x </b></h3>
        </button>
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