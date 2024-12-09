import React from "react";
import { Input, InputGroup, DateInput } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { Divider, Typography, Box } from "@mui/material";
import InvoiceBilltable from "../components/tables/InvoiceBilltable";

function MakeInvoice() {
  return (
    <Box className="p-8 bg-gray-50 min-h-screen">
      {/* Header Section */}
      <Box className="flex items-center mb-6">
        <p className="font-bold text-2xl  mr-8">Make Invoice</p>
        <InputGroup inside style={{ width: "30%" }}>
          <Input placeholder="Search customer" />
          <InputGroup.Button>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </Box>

      {/* Customer Information Card */}
      <div className="p-6 bg-white rounded-lg  mb-6">
        <Box className="flex flex-row justify-between">
          {/* Customer Details */}
          <Box className="flex flex-col space-y-1">
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-40">
                Customer Code:
              </Typography>
              <Typography className="text-gray-800">C12345</Typography>
            </Box>
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-40">
                Customer Name:
              </Typography>
              <Typography className="text-gray-800">John Doe</Typography>
            </Box>
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-40">Address:</Typography>
              <Typography className="text-gray-800">Galle Rd, Galle</Typography>
            </Box>
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-40">Phone:</Typography>
              <Typography className="text-gray-800">0771234567</Typography>
            </Box>
          </Box>

          {/* Invoice Information */}
          <Box className="flex flex-col space-y-4">
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-32">
                Invoice No:
              </Typography>
              <Input style={{ width: "70%" }} placeholder="Enter Invoice No." />
            </Box>
            <Box className="flex items-center">
              <Typography className="text-gray-600 w-32">Date:</Typography>
              <DateInput style={{ width: "70%" }} placeholder="Select Date" />
            </Box>
          </Box>
        </Box>
      </div>

      <div>
        <InvoiceBilltable />
      </div>
    </Box>
  );
}

export default MakeInvoice;