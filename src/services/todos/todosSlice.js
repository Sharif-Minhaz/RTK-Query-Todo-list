import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
	reducerPath: "todoApi",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://todos-api-custom.herokuapp.com/api/",
	}),
	tagTypes: ["Todos"],
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
			invalidatesTags: ["Todos"],
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
			invalidatesTags: ["Todos"],
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
			invalidatesTags: ["Todos"],
		}),
	}),
});

export const {
	useGetAllTodoQuery,
	useDeleteTodoMutation,
	useCreateTodoMutation,
	useUpdateTodoMutation,
} = todoApi;
