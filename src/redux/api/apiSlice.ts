/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://reqres.in/api",
  }),
  tagTypes: ["connection"],
  endpoints: () => ({}),
});

export default api;
