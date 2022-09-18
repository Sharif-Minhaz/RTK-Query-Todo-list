const AddTodo = () => {
	const handleSubmit = () => {

	}
	const handleAdd = () => {

	}
	return (
		<form onSubmit={handleSubmit}>
			<input type="text" onChange={handleAdd} placeholder="Enter todo" />
			<button>ADD</button>
		</form>
	);
};

export default AddTodo;
