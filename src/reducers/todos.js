const createTodo = (id, text) => ({
	id,
	text,
	completed: false,
});

const toggleTodo = (todos, id) =>
	todos.map((todo) =>
		todo.id !== id ? todo : { ...todo, completed: !todo.completed }
	);

const reducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, createTodo(action.id, action.text)];
		case 'TOGGLE_TODO':
			return toggleTodo(state, action.id);
		default:
			return state;
	}
};

export default reducer;
