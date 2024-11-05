import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ title }) {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between mx-10 h-20 items-center">
      <div className="text-2xl font-bold">{title} | 10</div>
      <div className="flex items-center">
        <button
          className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg transition-colors duration-300 hover:bg-blue-600 hover:text-white mr-20"
          onClick={() => navigate("/makeInvoice")}
        >
          Create Invoice
        </button>
        <div className="text-xl font-medium ml-20">Jimmy Jay</div>
      </div>
    </div>
  );
}

export default Navbar;
