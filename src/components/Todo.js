import React from 'react';

export default function Todo({ status, onClick, children }) {
	return (
		<span
			style={{ textDecoration: status ? 'line-through' : 'none' }}
			onClick={onClick}
		>
			{children}
		</span>
	);
}
