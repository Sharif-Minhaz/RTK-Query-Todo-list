import { useState } from "react";

const SingleTodo = ({ title, isComplete }) => {
	const [check, setCheck] = useState(isComplete);

	const handleOnChange = () => {
		setCheck(!check);
	};

	return (
		<div className="single-todo">
			<div>
				<input type="checkbox" checked={check} onChange={handleOnChange} /> {title}{" "}
			</div>
			<div className="action-btn">
				<button>Edit</button> <button>Delete</button>
			</div>
		</div>
	);
};

export default SingleTodo;
