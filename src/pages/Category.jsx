import React, { useState } from "react";
import Navbar from "../components/common/Navbar";
import { Input, InputGroup, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { InputPicker } from "rsuite";
import CustormerTable from "../components/tables/CustormerTable";

const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);

function Category() {
  const [selectedOption, setSelectedOption] = useState("Item"); // Set initial state to "Item"

  const handleToggle = (option) => {
    setSelectedOption(option); // Update state based on selected option
  };

  return (
    <div>
      <Navbar title="Categories" />
      <div className="flex flex-col p-6">
        <div className="h-20 bg-white rounded-lg flex flex-row items-center justify-between mb-2">
          <div className="flex">
            <div className="flex flex-row items-center ml-5 border border-gray-300 rounded-md overflow-hidden">
              <button
                onClick={() => handleToggle("Item")}
                className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                  selectedOption === "Item"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Item
              </button>
              <button
                onClick={() => handleToggle("Customer")}
                className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                  selectedOption === "Customer"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Customer
              </button>
              <button
                onClick={() => handleToggle("Area")}
                className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                  selectedOption === "Area"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Area
              </button>
              <button
                onClick={() => handleToggle("Location")}
                className={`w-24 py-2 text-sm font-semibold transition-colors duration-200 ${
                  selectedOption === "Location"
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                Location
              </button>
            </div>

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
              <span className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3">
                add_circle
              </span>
              <p className="text-lg font-medium text-txtdarkblue">
                Add Customer
              </p>
            </Row>
          </div>
        </div>

        <div>
          {/* Conditionally render tables based on selected option */}
          {selectedOption === "Item" && (
            <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
              <p className="text-lg p-5 font-medium">
                Item Customers | 20
              </p>
              <div className="flex-grow">
                <CustormerTable />
              </div>
            </div>
          )}
          {selectedOption === "Customer" && (
            <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
              <p className="text-lg p-5 font-medium">
                Customer Customers | 30
              </p>
              <div className="flex-grow">
                {/* Add Customer-specific table component here */}
              </div>
            </div>
          )}
          {selectedOption === "Area" && (
            <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
              <p className="text-lg p-5 font-medium">
                Area Customers | 30
              </p>
              <div className="flex-grow">
                {/* Add Area-specific table component here */}
              </div>
            </div>
          )}
          {selectedOption === "Location" && (
            <div className="bg-white h-96 rounded-md mt-8 flex flex-col">
              <p className="text-lg p-5 font-medium">
                Location Customers | 30
              </p>
              <div className="flex-grow">
                {/* Add Location-specific table component here */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Category;
