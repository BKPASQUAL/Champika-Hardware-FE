import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { Input, InputGroup, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { InputPicker } from "rsuite";
import CustormerTable from "../components/tables/CustormerTable";

const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);

function Custormers() {
  const [isRetail, setIsRetail] = useState(true); // Set initial state to Retail

  const handleToggle = (selectedOption) => {
    setIsRetail(selectedOption === "Distribute"); // Toggle based on selected option
  };

  return (
    <>
      <Navbar title="Custormers" />
      <div className="flex flex-col p-6 ">
        <div className="h-20 bg-white rounded-2lg flex flex-row items-center justify-between mb-8">
          <div className="flex flex-row items-center ml-5 border border-gray-300 rounded-md overflow-hidden">
            <button
              onClick={() => handleToggle("Distribute")}
              className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                isRetail
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Distribute
            </button>
            <button
              onClick={() => handleToggle("Retail")}
              className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                !isRetail
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              Retail
            </button>
          </div>

          <div>
            <InputGroup inside style={{ width: 350 }} className="ml-14">
              <Input placeholder="Search here" />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </div>

          <div className="flex">
            <InputPicker data={data} style={{ width: 224 }} className="mr-16" />
            <Row
              className="min-w-52 flex items-center cursor-pointer"
              onClick={() => navigate("/home/newOrder")}
            >
              <span className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3 ">
                add_circle
              </span>
              <p className="text-lg font-medium text-txtdarkblue">
                Add Customer
              </p>
            </Row>
          </div>
        </div>

        <div>
          {/* Conditionally show the CustormerTable based on the toggle */}
          {isRetail ? (
              <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
                <p className="text-lg p-5 font-medium">Distribute Customers | 20 </p>
                <div className="flex-grow">
                  {/* <OngoingOrdersTable /> */}
                  <CustormerTable />
                </div>
              </div>
          ) : (
            <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
                <p className="text-lg p-5 font-medium">Retail Customers | 30</p>
                <div className="flex-grow">
                  {/* <OngoingOrdersTable /> */}
                  <CustormerTable />
                </div>
              </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Custormers;
