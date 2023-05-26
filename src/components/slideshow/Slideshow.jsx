import React, { useEffect } from 'react';
import useFetch from '@Hooks/useFetch';

import './Slideshow.css';

const Slideshow = () => {
	const slidesPath = 'http://localhost:8080/';
	const slidePathOption = 'slideShowCollection';

	const [data, isError, loading, errorMessage] = useFetch(slidesPath, slidePathOption);

	useEffect(() => {
		if (isError) {
			console.log(errorMessage);
		}

		if (loading) {
			console.log('Loading...');
		}

		if (data) {
			console.log(data);
		}
	}, [data, isError, loading, errorMessage]);

	return (
		<section id='slideshow'>
			<h1>Slideshow</h1>
			<img src='../utils/assets/images/slide1.jpg' alt='mouse and men' />
			{/* We check if it's loading then if there's an error and finally if it's ok, we display each picture (data[].path) with a slideshow */}
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>{errorMessage}</p>
			) : (
				<div className='slideshow'>
					<div className='slideshowSlider'>
						{data.map(
							(/** @type {{ path: string; alt: string; }} */ slide, /** @type {React.Key} */ index) => {
								return <img src={slide.path} key={index} className='slide' alt={slide.alt}></img>;
							}
						)}
					</div>
				</div>
			)}
		</section>
	);
};

export default Slideshow;
