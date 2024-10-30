import React from "react";
import { Outlet } from "react-router-dom";
import SidebarComp from "./Sidebar";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        height: "98vh",
        overflow: "hidden"
      }}
    >
      <SidebarComp /> {/* Sidebar Component */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
        }}
      >
        <Outlet /> {/* This renders the nested route component like AddSuppliers */}
      </div>
    </div>
  );
}

export default Home;
