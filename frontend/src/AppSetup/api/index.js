import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = "https://merchup.onrender.com/api/v1/web";

export const merchApi = createApi({
  reducerPath: "merchApi",
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders: (headers, { getState }) => {
      const user = getState()?.user?.user;
      const token = user?.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getCollections: builder.query({
      query: () => "/collection/list",
    }),
    createOrder: builder.mutation({
      query: (order) => ({
        url: "/order/save",
        method: "POST",
        body: order,
      }),
    }),
    createUser: builder.mutation({
      query: (user) => ({
        url: "/client/signUp",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/client/login",
        method: "POST",
        body: data,
      }),
      transformResponse: (response, meta, arg) => response,
      transformErrorResponse: (response, meta, arg) => response.data.error,
    }),
  }),
});
