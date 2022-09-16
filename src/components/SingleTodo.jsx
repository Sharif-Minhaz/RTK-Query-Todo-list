import { useState } from "react";

const SingleTodo = ({ title, isComplete }) => {
	const [check, setCheck] = useState(isComplete);

	const handleOnChange = () => {
		setCheck(!check);
	};

	return (
		<div>
			<span>
				<input type="checkbox" checked={check} onChange={handleOnChange} /> {title} <button>Edit</button> <button>Del</button>
			</span>
		</div>
	);
};

export default SingleTodo;
