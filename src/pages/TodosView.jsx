import SearchTodo from "../components/SearchTodo";
import SingleTodo from "../components/SingleTodo";
import { useGetAllTodoQuery } from "../services/todos/todosSlice";
const TodosView = () => {
	const allTodos = useGetAllTodoQuery();

	if (allTodos.isLoading) return <div>Loading....</div>;
	if (allTodos.isError) return <h1>An error occurred {allTodos.error.error}</h1>;

	return (
		<div>
			<SearchTodo />
			{allTodos.data.map((todo) => (
				<SingleTodo title={todo.title} isComplete={todo.title} key={todo._id} />
			))}
		</div>
	);
};

export default TodosView;
