import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://todos-api-custom.herokuapp.com/api/",
	}),
	tagTypes: ["Todos", "Search"],
	endpoints: (builder) => ({
		getAllTodo: builder.query({
			query: () => ({
				url: "todos",
				method: "GET",
			}),
			providesTags: ["Todos"],
		}),
		deleteTodo: builder.mutation({
			query: (id) => ({
				url: `todos/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["Todos", "Search"],
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
			invalidatesTags: ["Todos", "Search"],
		}),
		updateTodo: builder.mutation({
			query: (updateTodoData) => {
				const { id, ...data } = updateTodoData;
				return {
					url: `todos/${id}`,
					method: "PATCH",
					body: data,
					headers: {
						"Content-type": "application/json; charset=UTF-8",
					},
				};
			},
			invalidatesTags: ["Todos", "Search"],
		}),
		searchTodo: builder.query({
			query: (queryString) => {
				return {
					url: `todos/find/?title=${queryString}`,
					method: "GET",
				};
			},
			providesTags: ["Search"],
		}),
	}),
});

export const {
	useGetAllTodoQuery,
	useDeleteTodoMutation,
	useCreateTodoMutation,
	useUpdateTodoMutation,
	useSearchTodoQuery,
} = todoApi;
