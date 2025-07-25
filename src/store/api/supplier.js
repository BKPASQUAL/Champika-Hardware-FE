import api from "./api";

export const supliersApi = api.injectEndpoints({
  reducerPath: "supliersApi",
  endpoints: (builder) => ({
    addSupplier: builder.mutation({
      query: (formData) => ({
        url: "suppliers",
        method: "POST",
        body: formData,
      }),
    }),

    getAllSuppliers: builder.query({
      query: () => ({
        url: "suppliers",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddSupplierMutation, useGetAllSuppliersQuery } = supliersApi;
