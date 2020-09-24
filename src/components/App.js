import React from 'react';
import AddTodo from '../containers/AddTodo';
import VisibilityTodos from '../containers/VisibilityTodos';
import Footer from './Footer';

function App() {
	return (
		<div className='App'>
			<AddTodo />
			<VisibilityTodos />
			<Footer />
		</div>
	);
}

export default App;
