import React from 'react';

export default function Button({ active, children, onClick }) {
	return (
		<button disabled={active} onClick={onClick}>
			{children}
		</button>
	);
}
