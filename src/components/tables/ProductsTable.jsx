import React from "react";
import { Table } from "rsuite";
import { useGetAllProductsQuery } from "../../store/api/productApi";

const { Column, HeaderCell, Cell } = Table;

function ProductsTable() {
  const { data: productData, isLoading, isError } = useGetAllProductsQuery();
  console.log("productData", productData?.payload);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading products.</div>;

  const handleEditItem = (rowData) => {
    console.log("Edit item:", rowData);
  };

  const handleDeleteOpen = (id) => {
    console.log("Delete item with ID:", id);
  };

  return (
    <div>
      <Table
        height={650}
        data={productData?.payload || []}
        onRowClick={(rowData) => {
          console.log(rowData);
        }}
        style={{ width: "100%" }}
      >
        <Column flexGrow={1} align="center">
          <HeaderCell>Code</HeaderCell>
          <Cell dataKey="id" />
        </Column>

        <Column flexGrow={3}>
          <HeaderCell>Product Name</HeaderCell>
          <Cell dataKey="productName" />
        </Column>

        <Column flexGrow={2}>
          <HeaderCell>MRP</HeaderCell>
          <Cell dataKey="price" />
        </Column>

        {Array.from({ length: 5 }, (_, index) => (
          <Column flexGrow={2} key={index}>
            <HeaderCell>{`${10 + index * 5}%`}</HeaderCell>
            <Cell>
              {(rowData) => (
                rowData.discountedPrices?.[index]?.price?.toFixed(2) || "-"
              )}
            </Cell>
          </Column>
        ))}

        <Column flexGrow={2}>
          <HeaderCell>SELLING PRICE</HeaderCell>
          <Cell>
            {(rowData) => rowData.price.toFixed(2)}
          </Cell>
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
