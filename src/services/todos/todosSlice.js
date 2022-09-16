import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://todos-api-custom.herokuapp.com/api/",
	}),
	endpoints: (builder) => ({
		getAllTodo: builder.query({
			query: () => ({
				url: "todos",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetAllTodoQuery } = todoApi;
