import { useState } from "react";
import { useDeleteTodoMutation } from "../services/todos/todosSlice";
import Loading from "./Loading";
import UpdateTodo from "./UpdateTodo";

const SingleTodo = ({ id, title, isComplete }) => {
	const [check, setCheck] = useState(isComplete);
	const [revealUpdateBox, setRevealUpdateBox] = useState(false);
	const [deleteTodo, responseInfo] = useDeleteTodoMutation();

	const handleOnChange = () => {
		setCheck(!check);
	};

	const handleDelete = () => {
		deleteTodo(id);
	};

	if (responseInfo.isLoading) return <Loading />;
	if (responseInfo.isError) return <h1>An error occurred, {responseInfo.error.error}</h1>;

	return (
		<div className="single-todo">
			<div className="wrapper">
				<div>
					<input type="checkbox" checked={check} onChange={handleOnChange} />
					<span className={!check ? "" : "strike"}>{title}</span>
				</div>
				<div className="action-btn">
					<button onClick={() => setRevealUpdateBox(true)}>Edit</button>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
			{revealUpdateBox && (
				<UpdateTodo
					setRevealUpdateBox={setRevealUpdateBox}
					id={id}
					title={title}
					isComplete={isComplete}
				/>
			)}
		</div>
	);
};

export default SingleTodo;
