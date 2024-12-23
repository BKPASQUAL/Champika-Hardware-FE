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

    getAllCategories: builder.query({
      query: () => "categories/getAllCategories",
    }),
  }),
});

export const { useAddSupplierMutation, useGetAllCategoriesQuery } =
  supliersApi;
