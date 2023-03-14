import React from 'react';
import './ButtonPanel.css';

const ButtonPanel = props => {
	return (
		<div>
			{props.categoriesList.map(category => (
				<button className='categoryBtn' key={category.id}>
					{category.text}
				</button>
			))}
		</div>
	);
};

export default ButtonPanel;
