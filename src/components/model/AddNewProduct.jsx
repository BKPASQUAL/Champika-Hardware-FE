import * as React from "react";
import { Modal, Button, Divider } from "rsuite";
import TextField from "@mui/material/TextField";

function AddNewProduct({ open, onClose }) {
  return (
    <div>
      <Modal open={open} onClose={onClose}>
          <Modal.Title>Add New Product</Modal.Title>
          <Divider/>
          <div >
            <div className="grid grid-cols-2 gap-5 mb-5 ">
              <TextField
                id="product-name"
                label="Product Name"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="product-description"
                label="Description"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="product-price"
                label="Price"
                variant="outlined"
                type="number"
                className="w-full"
              />
              <TextField
                id="product-quantity"
                label="Quantity"
                variant="outlined"
                type="number"
                className="w-full"
              />
              <TextField
                id="product-sku"
                label="SKU"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="product-category"
                label="Category"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="product-supplier"
                label="Supplier"
                variant="outlined"
                className="w-full"
              />
              <TextField
                id="product-location"
                label="Location"
                variant="outlined"
                className="w-full"
              />
            </div>
          </div>
        <Modal.Footer>
          <Button onClick={onClose} appearance="primary">
            Ok
          </Button>
          <Button onClick={onClose} appearance="subtle">
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AddNewProduct;
