import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Input, InputGroup } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

function CreateInvoiceModel({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="md" // This can be set to 'xs', 'sm', 'md', 'lg', or 'xl'
    >
      <div className="h-56">
        <div className="">
            <p>Select Customer</p>
        </div>
        <DialogContent style={{ padding: "20px" }}>
          <InputGroup inside style={{ width: 250 }}>
            <Input placeholder="Search here" />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default CreateInvoiceModel;
