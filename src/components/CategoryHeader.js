import React from 'react';
import './CategoryHeader.css';

const CategoryHeader = props => {
	return (
		<div>
			<h2>{props.categoryTitle} Pictures</h2>
		</div>
	);
};

export default CategoryHeader;
