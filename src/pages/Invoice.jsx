import React from "react";
import Navbar from "../components/common/Navbar";
import { Input, InputGroup, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { InputPicker } from "rsuite";
import CustormerTable from "../components/tables/CustormerTable";
import { DateRangePicker } from "rsuite";

const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);
function Invoice() {
  return (
    <div className="overflow-hidden h-screen"> 
      <Navbar title="Invoice" />
      <div className="flex flex-col p-6">
        <div className="h-20 bg-white rounded-lg flex flex-row items-center justify-between mb-8">
          <div className="flex ">
            <InputGroup inside style={{ width: 450 }} className="ml-4 mr-8">
              <Input placeholder="Seract here" />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
            <DateRangePicker className="mr-8" />
            <InputPicker data={data} style={{ width: 224 }} className="mr-8" />
          </div>
        </div>
        <div className="mb-8 h-28 flex ">
          <div
            className={`size-full rounded-lg		 bg-white mr-14 flex flex-row justify-between p-4 ${"hover:scale-105 hover:shadow-md"} transform transition-transform duration-300`}
          >
            <div>
              <p className="font-semibold">All Invoice</p>
              <p className="text-xs mb-3">Total number of invoices</p>
              <p className="text-xl text-sky-600">00</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-blue-600">
              assignment
            </span>
          </div>

          <div
            className={`size-full rounded-lg	 bg-white mr-14 ml-14 flex flex-row justify-between p-4 ${"hover:scale-105 hover:shadow-md"} transform transition-transform duration-300`}
          >
            <div>
              <p className="font-semibold">Paid Invoice</p>
              <p className="text-xs	mb-3">Invoice are fully paid</p>
              <p className="text-xl text-sky-600	">00</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-emerald-600	">
              check_circle
            </span>
          </div>
          <div
            className={`size-full rounded-lg	 bg-white mr-14 ml-14 flex flex-row justify-between p-4 ${"hover:scale-105 hover:shadow-md"} transform transition-transform duration-300`}
          >
            <div>
              <p className="font-semibold">Unpaid Invoice</p>
              <p className="text-xs	mb-3">Pending payment</p>
              <p className="text-xl text-sky-600	">00</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-amber-500	">
              hourglass_empty
            </span>
          </div>
          <div
            className={`size-full rounded-lg	 bg-white ml-14 flex flex-row justify-between p-4 ${"hover:scale-105 hover:shadow-md"} transform transition-transform duration-300`}
          >
            <div>
              <p className="font-semibold">Due Invoice</p>
              <p className="text-xs	mb-3">More than 45 days</p>
              <p className="text-xl text-sky-600	">00</p>
            </div>
            <span className="material-symbols-outlined text-3xl text-rose-700	">
              warning
            </span>
          </div>
        </div>
        <div>
          <CustormerTable />
        </div>
      </div>
    </div>
  );
}

export default Invoice;
