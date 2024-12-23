import React from "react";
import { Table } from "rsuite";
import { useGetAllSuppliersQuery } from "../../store/api/supplier";

const { Column, HeaderCell, Cell } = Table;

function SuppliersTable() {
  const { data: SupplierData } = useGetAllSuppliersQuery();
  console.log(SupplierData);

  return (
    <div>
      <Table
        height={650}
        data={SupplierData?.payload || []} 
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        style={{ width: "100%" }}
      >
        <Column flexGrow={1} align="center">
          <HeaderCell className="bg-gray-200 text-gray-700">Code</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Supplier Name
          </HeaderCell>
          <Cell dataKey="supplierName" />
        </Column>

        {/* <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Description
          </HeaderCell>
          <Cell dataKey="description" />
        </Column> */}

        {/* <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Address
          </HeaderCell>
          <Cell dataKey="address" />
        </Column> */}

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Contact No
          </HeaderCell>
          <Cell dataKey="phoneNumber" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Rep Name
          </HeaderCell>
          <Cell dataKey="representativeName" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Rep Contact No
          </HeaderCell>
          <Cell dataKey="representativeContact" />
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

export default SuppliersTable;
