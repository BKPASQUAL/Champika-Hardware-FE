import api from "./api";

export const categoriesApi = api.injectEndpoints({
  reducerPath: "categoriesApi",
  endpoints: (builder) => ({
    addCategories: builder.mutation({
      query: (formData) => ({
        url: "categories/createCategories",
        method: "POST",
        body: formData,
      }),
    }),

    getAllSuppliers: builder.query({
      query: () => "categories/getAllSuppliers",
    }),
  }),
});

export const { useAddCategoriesMutation, useGetAllSuppliersQuery } =
  categoriesApi;
