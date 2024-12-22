import React, { useState } from "react";
import { IconButton } from "rsuite";
import { VscRemove } from "react-icons/vsc";

function InvoiceBilltable() {
  // Mock data for the table
  const initialItems = [
    { itemCode: "A001", itemName: "Item A", quantity: 2, price: 100, total: 200 },
    { itemCode: "A002", itemName: "Item B", quantity: 3, price: 150, total: 450 },
    { itemCode: "A003", itemName: "Item C", quantity: 1, price: 200, total: 200 },
  ];

  const [items, setItems] = useState(initialItems);

  const removeItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleInputChange = (e, field, index) => {
    const updatedItems = [...items];
    updatedItems[index][field] = e.target.value;
    updatedItems[index].total = updatedItems[index].quantity * updatedItems[index].price;
    setItems(updatedItems);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      {/* Table for displaying items */}
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((rowData, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={rowData.itemCode}
                  onChange={(e) => handleInputChange(e, "itemCode", rowIndex)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={rowData.itemName}
                  onChange={(e) => handleInputChange(e, "itemName", rowIndex)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  min="1"
                  value={rowData.quantity}
                  onChange={(e) => handleInputChange(e, "quantity", rowIndex)}
                />
              </td>
              <td>
                <input
                  type="number"
                  className="form-control"
                  min="0"
                  value={rowData.price}
                  onChange={(e) => handleInputChange(e, "price", rowIndex)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={rowData.total}
                  readOnly
                />
              </td>
              <td>
                <IconButton
                  icon={<VscRemove />}
                  onClick={() => removeItem(rowIndex)}
                  appearance="subtle"
                  color="red"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InvoiceBilltable;
