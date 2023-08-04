/* eslint-disable no-undef */
import React, { useEffect } from 'react';
import useFetchJson from '@Hooks/useFetchJson';
import Slides from '@Models/slides/slides';

import './Slideshow.css';

const Slideshow = () => {
	const slidePathOption = 'slideShowCollection';

	const [data, isError, loading, errorMessage] = useFetchJson(process.env.REACT_APP_API_URL, slidePathOption);

	const [slide, setSlide] = React.useState(0);
	const delay = 5000;

	useEffect(() => {
		if (data && slide < data.length - 1) {
			setTimeout(() => setSlide(slide + 1), delay);
		} else if (data && slide === data.length - 1) {
			setTimeout(() => setSlide(0), delay);
		}

		return () => {};
	}, [data, isError, loading, errorMessage, slide]);

	return (
		<div id='slideshow'>
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>{errorMessage}</p>
			) : (
				<div className='slideshow'>
					<div className='slideshowSlider' style={{ transform: `translate3d(${-slide * 100}%, 0, 0)` }}>
						{data.map((/** @type {{ id: any; path: string; pathWebp: String; alt: any; }} */ slide) => (
							// @ts-ignore
							<Slides
								key={slide.id}
								// eslint-disable-next-line no-undef
								path={require('' + '@Images/Desktop/' + slide.pathWebp)}
								alt={slide.alt}
								onClick={() => console.log('click')}
								isDelete={false}
								onDelete={() => console.log('delete')}
								isEdit={false}
								onEdit={() => console.log('edit')}
								isAdd={false}
								onAdd={() => console.log('add')}
							/>
						))}
					</div>
					<div className='page__title'>
						Guêpes & Frelons
						<span>87</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default Slideshow;
