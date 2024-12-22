import React from "react";
import { Modal, Button, Divider } from "rsuite";
import TextField from "@mui/material/TextField";

function AddSuppliers({ open, handleClose }) {
  return (
    <Modal open={open} onClose={handleClose} style={{ top: "20px" }}>
        <Modal.Title>Add New Supplier</Modal.Title>
        <Divider />
        <div className="grid grid-cols-2 gap-5 mb-5">
          <TextField
            id="supplier-name"
            label="Supplier Name"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="description"
            label="Description"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="address"
            label="Address"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="rep-name"
            label="Representative Name"
            variant="outlined"
            className="w-full"
          />
          <TextField
            id="rep-contact"
            label="Representative Contact"
            variant="outlined"
            className="w-full"
          />
        </div>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="primary" color="red">
          Cancel
        </Button>
        <Button onClick={() => alert("Supplier Added")} appearance="primary">
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AddSuppliers;
