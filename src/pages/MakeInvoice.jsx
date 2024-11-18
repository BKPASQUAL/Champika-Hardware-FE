import React, { useState } from "react";
import {
  Form,
  Button,
  Table,
  InputPicker,
  IconButton,
  Input,
  InputGroup,
  DateInput,
} from "rsuite";
import EditIcon from "@rsuite/icons/Edit";
import SearchIcon from "@rsuite/icons/Search";
import { Divider, Typography, Box } from "@mui/material";

const { Group, Control, ControlLabel } = Form;

const mockInventory = [
  { code: "001", name: "Item A", unit: 20, rate: 100 },
  { code: "002", name: "Item B", unit: 20, rate: 150 },
  { code: "003", name: "Item C", unit: 20, rate: 200 },
];

function MakeInvoice() {
  const [formData, setFormData] = useState({
    code: "",
    name: "",
    unit: "",
    qty: 0,
    retQty: 0,
    freeQty: 0,
    rate: 0,
    disPercent: 0,
    amount: 0,
  });
  const [items, setItems] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const resetForm = () => {
    setFormData({
      code: "",
      name: "",
      unit: "",
      qty: 0,
      retQty: 0,
      freeQty: 0,
      rate: 0,
      disPercent: 0,
      amount: 0,
    });
    setEditingIndex(null);
  };

  const handleSelectItem = (value, field) => {
    const selectedItem = mockInventory.find((item) => item[field] === value);
    if (selectedItem) {
      setFormData({
        ...formData,
        code: selectedItem.code,
        name: selectedItem.name,
        unit: selectedItem.unit,
        rate: selectedItem.rate,
        disPercent: selectedItem.disPercent,
        qty: selectedItem.qty,
        amount: selectedItem.amount,
      });
    }
  };

  const handleInputChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSaveItem = () => {
    if (editingIndex !== null) {
      const updatedItems = items.map((item, index) =>
        index === editingIndex ? formData : item
      );
      setItems(updatedItems);
    } else {
      setItems([...items, formData]);
    }
    resetForm();
  };

  const handleEditItem = (index) => {
    setFormData(items[index]);
    setEditingIndex(index);
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <Box className="mb-8">
        <Box className="flex items-center justify-between mb-6">
          <h1 className="w-1/3 text-3xl font-semibold text-gray-800">
            Make Invoice
          </h1>
          <InputGroup className="!w-1/3 mt-4" inside>
            <Input placeholder="Search customer" />
            <InputGroup.Button>
              <SearchIcon />
            </InputGroup.Button>
          </InputGroup>
        </Box>

        {/* Customer Information Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <Box className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Box className="space-y-4">
              <Typography className="text-xl font-semibold text-gray-800 mb-2">
                Customer Information
              </Typography>
              <Box className="space-y-2">
                <p className="text-gray-600">
                  Customer Code:{" "}
                  <span className="font-medium text-gray-800">C12345</span>
                </p>
                <p className="text-gray-600">
                  Customer Name:{" "}
                  <span className="font-medium text-gray-800">John Doe</span>
                </p>
                <p className="text-gray-600">
                  Address:{" "}
                  <span className="font-medium text-gray-800">
                    Galle Rd, Galle
                  </span>
                </p>
                <p className="text-gray-600">
                  Phone:{" "}
                  <span className="font-medium text-gray-800">0771234567</span>
                </p>
              </Box>
            </Box>

            {/* Invoice Information */}
            <Box className="space-y-4">
              <Typography className="text-xl font-semibold text-gray-800 mb-2">
                Invoice Details
              </Typography>
              <Box className="space-y-4">
                <Box className="flex items-center space-x-3">
                  <label className="text-gray-600 w-32">Invoice No:</label>
                  <Input
                    className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
                    placeholder="Enter Invoice No."
                  />
                </Box>
                <Box className="flex items-center space-x-3">
                  <label className="text-gray-600 w-32">Date:</label>
                  <DateInput
                    className="flex-1 border border-gray-300 rounded-lg p-2 text-sm"
                    placeholder="Select Date"
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Box>

      <Form
        layout="horizontal"
        className="bg-white shadow-md rounded-lg p-6 mb-6"
      >
        {/* 1st Row */}
        <div className="flex space-x-10">
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">Code</ControlLabel>
            <InputPicker
              className="w-full"
              data={mockInventory.map((item) => ({
                label: item.code,
                value: item.code,
              }))}
              value={formData.code}
              onSelect={(value) => handleSelectItem(value, "code")}
              onClean={resetForm}
              searchable
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">Name</ControlLabel>
            <InputPicker
              className="w-full"
              data={mockInventory.map((item) => ({
                label: item.name,
                value: item.name,
              }))}
              value={formData.name}
              onSelect={(value) => handleSelectItem(value, "name")}
              onClean={resetForm}
              searchable
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">Unit</ControlLabel>
            <Control
              name="unit"
              value={formData.unit}
              onChange={(value) => handleInputChange(value, "unit")}
              type="number"
              className="!w-full"
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">Qty</ControlLabel>
            <Control
              name="qty"
              value={formData.qty}
              onChange={(value) => handleInputChange(value, "qty")}
              type="number"
              className="!w-full"
            />
          </Group>
        </div>

        {/* 2nd Row */}
        <div className="flex space-x-10 mt-4">
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">RetQty</ControlLabel>
            <Control
              name="retQty"
              value={formData.retQty}
              onChange={(value) => handleInputChange(value, "retQty")}
              type="number"
              className="!w-full"
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">FreeQty</ControlLabel>
            <Control
              name="freeQty"
              value={formData.freeQty}
              onChange={(value) => handleInputChange(value, "freeQty")}
              type="number"
              className="!w-full"
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">Rate</ControlLabel>
            <Control
              name="rate"
              value={formData.rate}
              onChange={(value) => handleInputChange(value, "rate")}
              type="number"
              className="!w-full"
            />
          </Group>
          <Group className="w-1/4 !flex !flex-col">
            <ControlLabel className="!text-left">DisPercent</ControlLabel>
            <Control
              name="disPercent"
              value={formData.disPercent}
              onChange={(value) => handleInputChange(value, "disPercent")}
              type="number"
              className="!w-full"
            />
          </Group>
        </div>

        {/* 3rd Row */}
        <div className="flex space-x-4 mt-4">
          <Group className="w-3/4 !flex !flex-col">
            <ControlLabel className="!text-left">Amount</ControlLabel>
            <Control
              name="amount"
              value={formData.amount}
              type="number"
              onChange={(value) => handleInputChange(value, "amount")}
              className="!w-4/12"
            />
          </Group>
          <Group className="w-1/4 flex flex-col justify-end">
            <Button
              className="!w-full !bg-blue-500 !text-white"
              onClick={handleSaveItem}
              disabled={!formData?.name}
            >
              {editingIndex !== null ? "Update" : "Save"}
            </Button>
          </Group>
        </div>
      </Form>

      {/* Table */}
      <Table
        data={items}
        height={400}
        autoHeight
        className="bg-white shadow-md rounded-lg text-center"
      >
        <Table.Column width={160} fixed>
          <Table.HeaderCell>Code</Table.HeaderCell>
          <Table.Cell dataKey="code" />
        </Table.Column>
        <Table.Column width={160} fixed>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.Cell dataKey="name" />
        </Table.Column>
        {[
          "unit",
          "qty",
          "retQty",
          "freeQty",
          "rate",
          "disPercent",
          "amount",
        ].map((field) => (
          <Table.Column width={160} key={field}>
            <Table.HeaderCell>
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </Table.HeaderCell>
            <Table.Cell dataKey={field} />
          </Table.Column>
        ))}
        <Table.Column width={160} fixed>
          <Table.HeaderCell>Action</Table.HeaderCell>
          <Table.Cell>
            {(_, rowIndex) => (
              <IconButton
                icon={<EditIcon />}
                onClick={() => handleEditItem(rowIndex)}
              />
            )}
          </Table.Cell>
        </Table.Column>
      </Table>
    </div>
  );
}

export default MakeInvoice;
