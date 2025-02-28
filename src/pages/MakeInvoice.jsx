import React, { useState, useEffect } from "react";
import { Input, InputGroup, DatePicker } from "rsuite"; // Updated import for DatePicker
import SearchIcon from "@rsuite/icons/Search";
import { Divider, Typography, Box, Button } from "@mui/material";
import InvoiceBilltable from "../components/tables/InvoiceBilltable";

function MakeInvoice() {
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [finalTotal, setFinalTotal] = useState(0);

  useEffect(() => {
    setFinalTotal(subTotal - discount);
  }, [subTotal, discount]);

  return (
    <Box className="p-8 pt-4 bg-gray-50 min-h-screen">
      <Box className="flex items-center mb-2">
        <Typography variant="h4" className="font-bold mr-8">
          Invoice
        </Typography>
      </Box>

      <div className="flex w-full space-x-6">
        <div className="w-1/2 h-auto p-6 bg-white rounded-lg shadow">
          <InputGroup inside style={{ width: "50%" }} className="mb-4">
            <Input placeholder="Search customer" />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
          <Box className="flex flex-row justify-between">
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
                <Typography className="text-gray-800">
                  Galle Rd, Galle
                </Typography>
              </Box>
              <Box className="flex items-center">
                <Typography className="text-gray-600 w-40">Phone:</Typography>
                <Typography className="text-gray-800">0771234567</Typography>
              </Box>
            </Box>
            <Box className="flex flex-col space-y-4">
              <Box className="flex items-center">
                <Typography className="text-gray-600 w-32">
                  Invoice No:
                </Typography>
                <Input
                  style={{ width: "70%" }}
                  placeholder="Enter Invoice No."
                />
              </Box>
              <Box className="flex items-center">
                <Typography className="text-gray-600 w-32">Date:</Typography>
                <DatePicker
                  style={{ width: "70%" }}
                  placeholder="Select Date"
                  format="yyyy-MM-dd"
                />
              </Box>
            </Box>
          </Box>
        </div>

        <div className="w-1/2 h-auto p-6 bg-white rounded-lg shadow flex flex-col space-y-4">
          <Box className="flex items-center">
            <Typography className="text-gray-600 w-32">
              Sub Total: 1500/
            </Typography>
          </Box>
          <Box className="flex items-center">
            <Typography className="text-gray-600 w-32">Discount:</Typography>
            <Input
              value={discount}
              onChange={(value) => setDiscount(Number(value))}
              style={{ width: "70%" }}
              placeholder="Enter Discount"
            />
          </Box>
          <Divider />
          <Box className="flex items-center">
            <Typography className="text-gray-600 w-32 font-bold">
              Final Total:
            </Typography>
            <Typography className="text-gray-800 font-bold">
              {finalTotal.toFixed(2)}
            </Typography>
          </Box>
          <Button variant="contained" color="primary">
            Save Invoice
          </Button>
        </div>
      </div>

      {/* Invoice Items Table */}
      <Box className="mt-6">
        <InvoiceBilltable />
      </Box>
    </Box>
  );
}

export default MakeInvoice;
