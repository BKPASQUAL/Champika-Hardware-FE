import React, { useState, useRef } from 'react';

const InvoiceBillTable = () => {
  const [items, setItems] = useState([
    { id: 1, code: '', name: '', quantity: 0, price: 0, total: 0 },
  ]);
  
  // Create refs for each row's inputs
  const inputRefs = useRef({});

  // Initialize refs structure if not already set up
  const setupRefs = (itemId) => {
    if (!inputRefs.current[itemId]) {
      inputRefs.current[itemId] = {
        code: null,
        name: null,
        quantity: null,
        price: null
      };
    }
  };

  // Calculate item total
  const calculateTotal = (qty, price) => {
    const numQty = parseFloat(qty) || 0;
    const numPrice = parseFloat(price) || 0;
    return (numQty * numPrice).toFixed(2);
  };

  // Check if all fields in a row are filled
  const isRowComplete = (item) => {
    return item.code !== '' && 
           item.name !== '' && 
           parseFloat(item.quantity) > 0 && 
           parseFloat(item.price) > 0;
  };

  // Handle input changes
  const handleChange = (id, field, value) => {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        const updatedItem = { ...item, [field]: value };
        
        // Recalculate total if quantity or price changes
        if (field === 'quantity' || field === 'price') {
          updatedItem.total = calculateTotal(
            field === 'quantity' ? value : item.quantity,
            field === 'price' ? value : item.price
          );
        }
        
        return updatedItem;
      }
      return item;
    });
    
    setItems(updatedItems);
    
    // Find the updated item to check if it's complete
    const updatedItem = updatedItems.find(item => item.id === id);
    
    // If the row is complete, check if we need to add a new row and move focus
    if (isRowComplete(updatedItem)) {
      // Check if this is the last row
      const isLastRow = id === Math.max(...items.map(item => item.id));
      
      if (isLastRow) {
        // Add a new row and focus on its first field
        const newId = id + 1;
        setItems([...updatedItems, { id: newId, code: '', name: '', quantity: 0, price: 0, total: 0 }]);
        
        // Need to wait for the new row to be rendered before focusing
        setTimeout(() => {
          if (inputRefs.current[newId] && inputRefs.current[newId].code) {
            inputRefs.current[newId].code.focus();
          }
        }, 10);
      } else {
        // Find the next row and focus on its first field
        const currentIndex = items.findIndex(item => item.id === id);
        const nextId = items[currentIndex + 1].id;
        
        if (inputRefs.current[nextId] && inputRefs.current[nextId].code) {
          inputRefs.current[nextId].code.focus();
        }
      }
    }
  };

  // Add a new empty row
  const addRow = () => {
    const newId = items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1;
    setItems([...items, { id: newId, code: '', name: '', quantity: 0, price: 0, total: 0 }]);
  };

  // Delete a row
  const deleteRow = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  // Focus on the next row when edit button is clicked
  const handleEditClick = (currentId) => {
    // Find the next row id
    const currentIndex = items.findIndex(item => item.id === currentId);
    const nextIndex = (currentIndex + 1) % items.length;
    const nextId = items[nextIndex].id;
    
    // Focus on the first input of the next row
    if (inputRefs.current[nextId] && inputRefs.current[nextId].code) {
      inputRefs.current[nextId].code.focus();
    }
  };

  // Calculate invoice total
  const invoiceTotal = items.reduce((sum, item) => sum + parseFloat(item.total || 0), 0).toFixed(2);

  return (
    <div className="w-full">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Invoice Items</h2>
        <button 
          onClick={addRow}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Add Item
        </button>
      </div>

      <div className="w-full overflow-x-auto">
        <table className="w-full border-collapse border">
          <thead>
            <tr className="bg-blue-100">
              <th className="w-1/6 border p-2">Item Code</th>
              <th className="w-2/6 border p-2">Item Name</th>
              <th className="w-1/6 border p-2">Qty</th>
              <th className="w-1/6 border p-2">Unit Price</th>
              <th className="w-1/6 border p-2">Total</th>
              <th className="w-1/6 border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => {
              setupRefs(item.id);
              return (
                <tr key={item.id}>
                  <td className="border p-2 text-center">
                    <input
                      type="text"
                      value={item.code}
                      onChange={(e) => handleChange(item.id, 'code', e.target.value)}
                      className="w-full p-1 border rounded"
                      ref={el => inputRefs.current[item.id].code = el}
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <input
                      type="text"
                      value={item.name}
                      onChange={(e) => handleChange(item.id, 'name', e.target.value)}
                      className="w-full p-1 border rounded"
                      ref={el => inputRefs.current[item.id].name = el}
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={(e) => handleChange(item.id, 'quantity', e.target.value)}
                      className="w-full p-1 border rounded"
                      ref={el => inputRefs.current[item.id].quantity = el}
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <input
                      type="number"
                      value={item.price}
                      onChange={(e) => handleChange(item.id, 'price', e.target.value)}
                      className="w-full p-1 border rounded"
                      ref={el => inputRefs.current[item.id].price = el}
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <input
                      type="text"
                      value={item.total}
                      readOnly
                      className="w-full p-1 bg-gray-100 border rounded"
                    />
                  </td>
                  <td className="border p-2 text-center">
                    <div className="flex justify-center space-x-2">
                      <button 
                        className="text-gray-600 hover:text-gray-800"
                        onClick={() => handleEditClick(item.id)}
                      >
                        <span className="material-symbols-outlined">edit_square</span>
                      </button>
                      <button 
                        className="text-rose-600 hover:text-rose-800"
                        onClick={() => deleteRow(item.id)}
                      >
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="bg-gray-100">
              <td colSpan="4" className="border p-2 text-right font-bold">
                Total Amount:
              </td>
              <td className="border p-2 text-center font-bold">
                {invoiceTotal}
              </td>
              <td className="border p-2"></td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default InvoiceBillTable;