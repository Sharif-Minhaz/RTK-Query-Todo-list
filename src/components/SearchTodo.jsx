const SearchTodo = ({ search, setSearch }) => {
	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	return (
		<div className="search-bar">
			<input
				type="search"
				onChange={handleSearch}
				value={search}
				placeholder="Search todos..."
			/>
		</div>
	);
};

export default SearchTodo;
