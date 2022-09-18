import { useState } from "react";
import { useUpdateTodoMutation } from "../services/todos/todosSlice";
import Loading from "./Loading";

const UpdateTodo = ({ id, title, isComplete, setRevealUpdateBox }) => {
	const [targetedValue, setTargetedValue] = useState({ id, title, isComplete });
	const [updateTodo, responseInfo] = useUpdateTodoMutation();

	const handleSubmit = () => {
		updateTodo(targetedValue);
		setRevealUpdateBox(false);
	};

	if (responseInfo.isLoading) return <Loading />;
	if (responseInfo.isError) return <h1>An error occurred, {responseInfo.error.error}</h1>;

	return (
		<form className="update-box" onSubmit={handleSubmit}>
			<input
				type="text"
				value={targetedValue.title}
				onChange={(e) => setTargetedValue({ ...targetedValue, title: e.target.value })}
				placeholder="Enter todo"
				required
			/>
			<button type="submit">Update</button>
			<button type="button" onClick={() => setRevealUpdateBox(false)}>
				Cancel
			</button>
		</form>
	);
};

export default UpdateTodo;
