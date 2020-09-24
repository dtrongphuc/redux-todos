import { connect } from 'react-redux';
import { toggleTodo } from '../actions/todo';
import TodoList from '../components/TodoList';
import selector from '../selectors';

const mapStateToProps = (state) => {
	return {
		todos: selector(state),
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id));
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
