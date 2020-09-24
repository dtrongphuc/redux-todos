import { createSelector } from 'reselect';

const todosSelector = (state) => state.todos;
const filterSelector = (state) => state.visibilityFilter;

const selector = createSelector(
	todosSelector,
	filterSelector,
	(todos, filter) => {
		switch (filter) {
			case 'ALL':
				return todos;
			case 'ACTIVE':
				return todos.filter((todo) => todo.completed === false);
			case 'COMPLETED':
				return todos.filter((todo) => todo.completed === true);
			default:
				return todos;
		}
	}
);

export default selector;
