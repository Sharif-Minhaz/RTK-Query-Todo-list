import { useState } from "react";
import { useDeleteTodoMutation } from "../services/todos/todosSlice";
import Loading from "./Loading";

const SingleTodo = ({ id, title, isComplete }) => {
	const [check, setCheck] = useState(isComplete);
	const [deleteTodo, responseInfo] = useDeleteTodoMutation();

	const handleOnChange = () => {
		setCheck(!check);
	};

	const handleDelete = () => {
		deleteTodo(id);
	};

	if (responseInfo.isLoading) return <Loading />;
	if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>;

	return (
		<div className="single-todo">
			<div>
				<input type="checkbox" checked={check} onChange={handleOnChange} />
				<span className={!check ? "" : "strike"}>{title}</span>
			</div>
			<div className="action-btn">
				<button>Edit</button> <button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default SingleTodo;
