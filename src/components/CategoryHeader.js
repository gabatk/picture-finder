import React from 'react';
import './CategoryHeader.css';

const CategoryHeader = props => {
	return (
		<div>
			<h2 className='categoryHeader'>{props.categoryTitle.length === 0 ? 'There is no picture to show' : `${props.categoryTitle} pictures`} </h2>
		</div>
	);
};

export default CategoryHeader;
