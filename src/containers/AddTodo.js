import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todo';

function AddTodo(props) {
	const [text, setText] = useState('');

	const handleChangeText = (event) => {
		setText(event.target?.value.trim());
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (!text.trim()) return;
		props.dispatch(addTodo(text));
		setText('');
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type='text'
				placeholder='Add todo item'
				required
				value={text}
				onChange={handleChangeText}
			/>
			<button type='submit'>ADD TODO</button>
		</form>
	);
}

export default connect()(AddTodo);
