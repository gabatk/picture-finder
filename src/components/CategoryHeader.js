import React from 'react';
import './CategoryHeader.css';

const CategoryHeader = props => {
	return (
		<div>
			<h2 className='categoryHeader'>{props.categoryTitle} pictures</h2>
		</div>
	);
};

export default CategoryHeader;
