import React from 'react';
import './ButtonPanel.css';

const ButtonPanel = props => {

    const onAddValue = (event) => {
        props.pasteValue(event.target.textContent)
    }

  	return (
		<div>
			{props.categoriesList.map(category => (
				<button className='categoryBtn' key={category.id} onClick=
                {onAddValue}>
					{category.text}
				</button>
			))}
		</div>
	);
};

export default ButtonPanel;
