import { useState } from "react";
import { useCreateTodoMutation } from "../services/todos/todosSlice";
import Loading from "./Loading";

const AddTodo = () => {
	const [title, setTitle] = useState("");
	const [addTodo, responseInfo] = useCreateTodoMutation();

	const handleSubmit = (e) => {
		e.preventDefault();
		const newTodo = {
			title,
			isComplete: false,
		};
		addTodo(newTodo);
		setTitle("");
	};

	if (responseInfo.isLoading) return <Loading />;

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				placeholder="Enter todo"
				required
			/>
			<button>ADD</button>
		</form>
	);
};

export default AddTodo;
