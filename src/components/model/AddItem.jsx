import React from "react";
import Dialog from "@mui/material/Dialog";
import CustormerTable from "../tables/CustormerTable";

function AddItem({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullWidth={true}
      maxWidth="lg" // This can be set to 'xs', 'sm', 'md', 'lg', or 'xl'
    >
      <div className="">
        <div className="p-8 flex">
            <div className="w-1/2">
                <CustormerTable/>
            </div>
            <div className="w-1/2 ">

            </div>
        </div>
      </div>
    </Dialog>
  );
}

export default AddItem;
