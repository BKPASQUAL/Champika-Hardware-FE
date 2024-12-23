import React from "react";
import Navbar from "../components/common/Navbar";
import { Input, InputGroup, Row } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { InputPicker } from "rsuite";
import AddSuppliers from "../components/model/AddSuppliers";
import SuppliersTable from "../components/tables/SuppliersTable";

const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);

function Suppliers() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="overflow-hidden h-screen">
      <Navbar title="Suppliers" />
      <div className="flex flex-col p-6 ">
        <div className="h-20 bg-white rounded-lg flex flex-row items-center justify-between mb-8">
          <div>
            <InputGroup inside style={{ width: 350 }} className="ml-4">
              <Input placeholder="Search here" />
              <InputGroup.Button>
                <SearchIcon />
              </InputGroup.Button>
            </InputGroup>
          </div>
          <div className="flex ">
            <InputPicker data={data} style={{ width: 224 }} className="mr-8" />
            <InputPicker data={data} style={{ width: 224 }} className="mr-16" />
            <Row
              className="min-w-52 flex items-center cursor-pointer"
              onClick={handleOpen}
            >
              <span className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3">
                add_circle
              </span>
              <p className="text-lg font-medium text-txtdarkblue">
                Add Suppliers
              </p>
            </Row>
          </div>
        </div>
        <div>
          <SuppliersTable />
        </div>
      </div>
      <AddSuppliers open={open} handleClose={handleClose} />
    </div>
  );
}

export default Suppliers;
