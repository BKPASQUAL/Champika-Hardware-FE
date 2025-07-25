import React from "react";
import { Table } from "rsuite";
import { useGetAllSuppliersQuery } from "../../store/api/supplier";

const { Column, HeaderCell, Cell } = Table;

function SuppliersTable() {
  const { data: SupplierData } = useGetAllSuppliersQuery();
  console.log(SupplierData);

  // Add these handler functions or import them if they exist elsewhere
  const handleEditItem = (rowData) => {
    console.log("Edit item:", rowData);
    // Add your edit logic here
  };

  const handleDeleteOpen = (supplierId) => {
    console.log("Delete item:", supplierId);
    // Add your delete logic here
  };

  return (
    <div>
      <Table
        height={650}
        data={SupplierData || []}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        style={{ width: "100%" }}
      >
        <Column flexGrow={1} align="center">
          <HeaderCell className="bg-gray-200 text-gray-700">Code</HeaderCell>
          <Cell dataKey="supplier_id" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Supplier Name
          </HeaderCell>
          <Cell dataKey="supplier_name" />
        </Column>

        {/* Uncommented description and address columns with correct dataKeys */}
        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Description
          </HeaderCell>
          <Cell dataKey="description" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Address
          </HeaderCell>
          <Cell dataKey="address" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Contact No
          </HeaderCell>
          <Cell dataKey="phone_number" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Rep Name
          </HeaderCell>
          <Cell dataKey="representative_name" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell className="bg-gray-200 text-gray-700">
            Rep Contact No
          </HeaderCell>
          <Cell dataKey="representative_contact" />
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
                    handleDeleteOpen(rowData.supplier_id);
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