import AddTodo from "../components/AddTodo";
import Loading from "../components/Loading";
import SearchTodo from "../components/SearchTodo";
import SingleTodo from "../components/SingleTodo";
import { useGetAllTodoQuery } from "../services/todos/todosSlice";

const TodosView = () => {
	const allTodos = useGetAllTodoQuery();

	if (allTodos.isLoading) return <Loading />;
	if (allTodos.isError) return <h1 className="error-msg">An error occurred, {allTodos.error.error}</h1>;

	return (
		<main>
			<SearchTodo />
			{allTodos.data.map((todo) => (
				<SingleTodo id={todo._id} title={todo.title} isComplete={todo.isComplete} key={todo._id} />
			))}
			<AddTodo />
		</main>
	);
};

export default TodosView;
