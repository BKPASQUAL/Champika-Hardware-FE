import React, { useState } from "react";
import { Input, InputGroup, Row, InputPicker } from "rsuite";
import Navbar from "../components/common/Navbar";
import SearchIcon from "@rsuite/icons/Search";
import ProductsTable from "../components/tables/ProductsTable";
import AddProduct from "../components/model/AddNewProduct";

const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);

function Products() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Navbar title="Products" />
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
          <div className="flex">
            <InputPicker data={data} style={{ width: 224 }} className="mr-8" />
            <InputPicker data={data} style={{ width: 224 }} className="mr-16" />
            <Row
              className="min-w-52 flex items-center cursor-pointer"
              onClick={handleOpen} // Open the modal when clicked
            >
              <span className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3 ">
                add_circle
              </span>
              <p className="text-lg font-medium text-txtdarkblue">
                Add New Product
              </p>
            </Row>
          </div>
        </div>
        <div>
          <ProductsTable />
        </div>
      </div>

      {/* Pass the open state and handleClose function to AddProduct */}
      <AddProduct open={open} onClose={handleClose} />
    </>
  );
}

export default Products;
