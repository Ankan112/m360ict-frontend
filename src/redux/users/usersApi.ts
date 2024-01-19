import api from "../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: ({ email, password }) => ({
        url: "/register",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["connection"],
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["connection"],
    }),
    getAllUsers: builder.query({
      query: ({ page }) => ({
        url: `/users?${page && `page=${page}`}`,
      }),
      providesTags: ["connection"],
    }),
    getSingleUser: builder.query({
      query: ({ id }) => ({
        url: `/users/${id}`,
      }),
      providesTags: ["connection"],
    }),
    updateUser: builder.mutation({
      query: ({ id, data }) => ({
        url: `/users/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["connection"],
    }),
    deleteUser: builder.mutation({
      query: ({ id }) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["connection"],
    }),
  }),
});

// import api from "../../api/apiSlice";

// const userApi = api.injectEndpoints({
//   endpoints: (builder) => ({
//     signUp: builder.mutation({
//       query: (data) => ({
//         url: /register,
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["connection"],
//     }),
//     login: builder.mutation({
//       query: (data) => ({
//         url: /login,
//         method: "POST",
//         body: data,
//       }),
//       invalidatesTags: ["connection"],
//     }),
//     getAllUsers: builder.query({
//       query: ({ page }) => ({
//         url: `/users?${page && page=${page}}`,
//       }),
//       providesTags: ["connection"],
//     }),
//     getSingleUser: builder.query({
//       query: ({ id }) => ({
//         url: /users/${id},
//       }),
//       providesTags: ["connection"],
//     }),
//     updateUser: builder.mutation({
//       query: ({ id, data }) => ({
//         url: /users/${id},
//         method: "PATCH",
//         body: data,
//       }),
//       invalidatesTags: ["connection"],
//     }),
//     deleteUser: builder.mutation({
//       query: ({ id }) => ({
//         url: /users/${id},
//         method: "DELETE",
//       }),
//       invalidatesTags: ["connection"],
//     }),
//     updateMyProfile: builder.mutation({
//       query: ({ data }) => ({
//         url: /users/my-profile,
//         method: "PATCH",
//         body: data,
//       }),
//       invalidatesTags: ["connection"],
//     }),
//   }),
// });

export const {
  useSignUpMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  useGetSingleUserQuery,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userApi;
