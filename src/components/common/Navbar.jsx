import React from "react";

function Navbar({title}) {
  return (
    <>
    <div className="navbar-main">
      <div className="navbar-left">
        {title}
      </div>
      <div className="navbar-right">
            Admin
      </div>
    </div>
    </>
  );
}

export default Navbar;
