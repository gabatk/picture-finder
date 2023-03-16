import React, { useState, useEffect } from 'react';
import { apiKey } from './config';
export const PhotoContext = React.createContext();

const ApiSection = query => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	const getPictures = useEffect(() => {
		console.log(query);
		fetch(
			`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query.query}&per_page=24&format=json&nojsoncallback=1`
		)
			.then(response => response.json())
			.then(data => console.log(data.photos.photo))
			.then(data => {
				setImages(data.photos.photo);
				setLoading(false);
			})
			.catch(error => {
				console.log(
					'Encountered an error with fetching and parsing data',
					error
				);
			});
	});

	return (
		<PhotoContext.Provider
			value={{ images, loading, getPictures }}
			submitApi={getPictures}>
			{/* {props.children} */}
		</PhotoContext.Provider>
	);
};

export default ApiSection;
