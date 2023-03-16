import React, { useState, useEffect } from 'react';
import { apiKey } from './config';
export const PhotoContext = React.createContext();

const ApiSection = props => {
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(true);

	const getPictures = useEffect(() => {
		console.log(props.query);
		{
			props.query !== '' &&
				fetch(
					`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${props.query}&per_page=24&format=json&nojsoncallback=1`
				)
					.then(response => response.json())
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
		}
	}, [props.query]);

	return (
		<PhotoContext.Provider value={{ images, loading, getPictures }}>
			{/* {props.children} */}
		</PhotoContext.Provider>
	);
};

export default ApiSection;
