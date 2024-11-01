import React from "react";
import { Table, Button } from "rsuite";
import mockUsers from "../../assets/mocks/ProductMocks";

const { Column, HeaderCell, Cell } = Table;
const data = mockUsers(20);

function ProductsTable() {
  return (
    <div>
      <Table
        height={650}
        data={data}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        style={{ width: "100%" }}
      >
        <Column flexGrow={2} align="center">
          <HeaderCell className="bg-gray-200 text-gray-700">Code</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Product Name
          </HeaderCell>
          <Cell dataKey="firstName" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">MRP</HeaderCell>
          <Cell dataKey="lastName" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">10%</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">15%</HeaderCell>
          <Cell dataKey="gender" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">20%</HeaderCell>
          <Cell dataKey="age" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">25%</HeaderCell>
          <Cell dataKey="postcode" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">30%</HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            SELLING PRICE
          </HeaderCell>
          <Cell dataKey="email" />
        </Column>

        <Column flexGrow={1}>
          <HeaderCell>Action</HeaderCell>
          <Cell>
            {(rowData) => (
              <>
                <span
                  className="material-symbols-outlined sidebar-icon text-lg font-medium text-txtdarkblue mr-3 cursor-pointer"
                  onClick={() => handleEditItem(rowData)}
                >
                  edit
                </span>
                <span
                  className="material-symbols-outlined sidebar-icon text-lg font-medium text-red mr-3 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteOpen(rowData.id);
                  }}
                >
                  delete
                </span>
              </>
            )}
          </Cell>
        </Column>
      </Table>
    </div>
  );
}

export default ProductsTable;
