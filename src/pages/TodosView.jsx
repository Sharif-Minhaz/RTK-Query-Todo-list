import { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import Loading from "../components/Loading";
import SearchTodo from "../components/SearchTodo";
import SingleTodo from "../components/SingleTodo";
import { useGetAllTodoQuery, useSearchTodoQuery } from "../services/todos/todosSlice";

const TodosView = () => {
	const allTodos = useGetAllTodoQuery();

	const [search, setSearch] = useState("");
	const searchedTodos = useSearchTodoQuery(search);

	const [data, setData] = useState([]);
	console.log(data);

	useEffect(() => {
		if (searchedTodos.isSuccess && searchedTodos.data?.length > 0) {
			setData(searchedTodos.data);
		} else {
			setData(allTodos.data);
		}
	}, [allTodos, searchedTodos, data]);

	if (allTodos.isLoading) return <Loading />;
	if (allTodos.isError)
		return <h1 className="error-msg">An error occurred, {allTodos.error.error}</h1>;

	return (
		<main>
			<SearchTodo search={search} setSearch={setSearch} />
			{data?.map((todo) => (
				<SingleTodo
					id={todo._id}
					title={todo.title}
					isComplete={todo.isComplete}
					key={todo._id}
				/>
			))}
			<AddTodo />
		</main>
	);
};

export default TodosView;
