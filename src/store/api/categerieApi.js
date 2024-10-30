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

    getAllCategories: builder.query({
      query: () => "categories/getAllCategories",
    }),
  }),
});

export const { useAddCategoriesMutation, useGetAllCategoriesQuery } =
  categoriesApi;
