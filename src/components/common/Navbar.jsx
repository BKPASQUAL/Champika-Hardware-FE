import React from "react";

function Navbar({ title }) {
  return (
    <>
      <div className="flex justify-between mx-10 h-20 items-center">
        <div className="text-3xl font-bold">{title} | 10</div>
        <div className="text-xl font-medium">Jimmy Jay </div>
      </div>
    </>
  );
}

export default Navbar;
