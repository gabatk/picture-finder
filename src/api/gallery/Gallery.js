import React from 'react';
import './Gallery.css';

const Gallery = props => {
	const results = props.imagesArray;

	let images;
	let noImages;

	if (results.length > 0) {
		images = results.map(image => {
			let url = `https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`;
			return (
				<img
					src={url}
					alt={image.title}
					key={image.id}
					className='gallery__item'
				/>
			);
		});
	}

	return <div className='gallery__box'>{images}</div>;
};

export default Gallery;
