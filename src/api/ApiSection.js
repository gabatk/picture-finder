import React, { useState, useEffect } from 'react';
import { apiKey } from './config';
import Gallery from './gallery/Gallery';

const ApiSection = props => {
	const [images, setImages] = useState([]);

	const getPictures = useEffect(() => {
		console.log(props.query);
		{
			props.query !== '' &&
				fetch(
					`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.query}&per_page=18&format=json&nojsoncallback=1`
				)
					.then(response => response.json())
					.then(data => {
						setImages(data.photos.photo);
					})
					.catch(error => {
						console.log(
							'Encountered an error with fetching and parsing data',
							error
						);
					});
		}
	}, [props.query]);

	return <Gallery imagesArray={images} />;
};

export default ApiSection;
