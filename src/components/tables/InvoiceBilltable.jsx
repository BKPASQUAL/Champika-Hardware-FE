import { Button, InputPicker } from "rsuite";
import React, { useState } from 'react';
import { Table, IconButton, Input, DatePicker, InputNumber } from 'rsuite';
import { VscEdit, VscSave, VscRemove } from 'react-icons/vsc';

const { Column, HeaderCell, Cell } = Table;

const styles = `
.table-cell-editing .rs-table-cell-content {
  padding: 4px;
}
.table-cell-editing .rs-input {
  width: 100%;
}
`;

const createEmptyRows = (count) => {
    return Array.from({ length: count }, (_, index) => ({
      id: index + 1,
      item: '',
      availableQuantity: 0,
      price: 0,
      status: 'EDIT',
    }));
  };
  
const data = ["Eugenia", "Bryan", "Linda", "Nancy", "Lloyd", "Alice"].map(
  (item) => ({ label: item, value: item })
);

let  myVar = 'Bawantha'

const onClicks = () => {
  myVar = 'Kalindu'
  console.log(myVar)
}

function InvoiceBilltable() {
    
  return (
    <div className="bg-white p-4">
      <InputPicker data={data} style={{ width: 224 }} className="mr-8" />
      <button onClick={onClicks}>Add Item</button>
      <div>

      </div>
    </div>
  );
}

export default InvoiceBilltable;
