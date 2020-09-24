import React from 'react';
import FilterButton from '../containers/FilterButton';

export default function Footer() {
	return (
		<div>
			<span>Filter:</span>
			<FilterButton filter='ALL'>All</FilterButton>
			<FilterButton filter='ACTIVE'>Active</FilterButton>
			<FilterButton filter='COMPLETED'>Completed</FilterButton>
		</div>
	);
}
