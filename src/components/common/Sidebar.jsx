import React, { useState, useEffect } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import "../../assets/css/Sidebar.css";
import { useNavigate } from "react-router-dom";

function SidebarComp() {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState("Overview");
  const [theme, setTheme] = useState("light");

  const navigate = useNavigate();

  const handleMenuItemClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
    navigate(menuItem);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    // Set initial theme based on user preference or default light theme
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.setAttribute("data-theme", savedTheme);
  }, []);

  useEffect(() => {
    // Save the theme to localStorage when it changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Sidebar
        collapsed={collapsed}
        width="200px"
        collapsedWidth="70px"
        transitionDuration={500}
        className="sidebar"
      >
        <div className="sidebar-log">
          {/* <h1>CH</h1> */}
        </div>
        <Menu>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "Overview" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  home
                </span>
              }
              onClick={() => handleMenuItemClick("Overview")}
            >
              Overview
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "Products" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  add_box
                </span>
              }
              onClick={() => handleMenuItemClick("Products")}
            >
              Products
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "Customers" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  event_note
                </span>
              }
              onClick={() => handleMenuItemClick("Customers")}
            >
              Customers
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "inventory" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  inventory_2
                </span>
              }
              onClick={() => handleMenuItemClick("inventory")}
            >
              Inventory
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "washList" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  local_laundry_service
                </span>
              }
              onClick={() => handleMenuItemClick("washList")}
            >
              Washing List
            </MenuItem>
          </div>
          <div className="sidebar-link">
            <MenuItem
              className={
                selectedMenuItem === "users" ? "selected-menu-item" : ""
              }
              icon={
                <span className="material-symbols-outlined sidebar-icon">
                  group
                </span>
              }
              onClick={() => handleMenuItemClick("users")}
            >
              Users
            </MenuItem>
          </div>

          {/* Theme Toggle */}
       
        </Menu>
      </Sidebar>
    </>
  );
}

export default SidebarComp;
