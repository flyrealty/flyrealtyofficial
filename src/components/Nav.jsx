import React from "react";
import "../App.css";
import logo from "../assets/FlyLogoX.png";
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import { SidebarContext } from "../contexts/SidebarContext";
import { useContext } from "react";

export default function Nav() {
  const { setIsSidebarOpen, isSidebarOpen } = useContext(SidebarContext);

  const handleLinkClick = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false);
    }
  };
  return (
    <>
      <Sidebar />
      <div className="navigation">
        <NavLink to="/" onClick={handleLinkClick} exact>
          <img src={logo} alt="Fly Realty Logo" />
        </NavLink>
        <div className="navbar">
          <NavLink
            to="/"
            onClick={handleLinkClick}
            exact
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to="/business"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            Projects
          </NavLink>
          <NavLink
            to="/insights"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            Insights
          </NavLink>
          <NavLink
            to="/about"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            About Us
          </NavLink>
          <NavLink
            to="/connect"
            onClick={handleLinkClick}
            activeClassName="active"
          >
            Connect
          </NavLink>
        </div>
        <div
          className="hamburger"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <span className="material-symbols-outlined">menu</span>
        </div>
      </div>
    </>
  );
}
