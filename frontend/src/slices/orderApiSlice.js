import { apiSlice } from "./apiSlice";
import { ORDERS_URL } from "../constants";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (order) => ({
        url: ORDERS_URL,
        method: "POST",
        body: { ...order },
      }),
    }),
    getOrderDetails: builder.query({
      query: (orderId) => ({
        url: `${ORDERS_URL}/${orderId}`,
        method: "GET", // no need to give this as method is set to GET by default
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useCreateOrderMutation, useGetOrderDetailsQuery } =
  orderApiSlice;
