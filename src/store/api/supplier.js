import api from "./api";

export const supliersApi = api.injectEndpoints({
  reducerPath: "supliersApi",
  endpoints: (builder) => ({
    addSupplier: builder.mutation({
      query: (formData) => ({
        url: "supplier",
        method: "POST",
        body: formData,
      }),
    }),

    getAllSuppliers: builder.query({
      query: () => "Supplier",
    }),
  }),
});

export const { useAddSupplierMutation, useGetAllSuppliersQuery } =
  supliersApi;
