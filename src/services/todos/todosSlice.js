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
		deleteTodo: builder.mutation({
			query: (id) => {
				return {
					url: `todos/${id}`,
					method: "DELETE",
				};
			},
		}),
		createTodo: builder.mutation({
			query: (newTodo) => ({
				url: "todos",
				method: "POST",
				body: newTodo,
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}),
		}),
	}),
});

export const { useGetAllTodoQuery, useDeleteTodoMutation, useCreateTodoMutation } = todoApi;
