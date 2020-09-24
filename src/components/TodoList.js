import React from 'react';

import Todo from './Todo';

export default function TodoList({ todos, onTodoClick }) {
	return (
		<ul>
			{todos?.map((todo) => {
				return (
					<li key={todo.id}>
						<Todo
							onClick={() => onTodoClick(todo.id)}
							status={todo.completed}
						>
							{todo.text}
						</Todo>
					</li>
				);
			})}
		</ul>
	);
}
