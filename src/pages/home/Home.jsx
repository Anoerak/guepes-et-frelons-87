import React from 'react';

// import Slideshow from '../../components/slideshow/Slideshow';
import Slideshow from '@Components/slideshow/Slideshow';

import './Home.css';

function Home() {
	return (
		<section id='home'>
			<Slideshow />
			<h1>Hello, I'm the Home Component, please fill me out with good stuff!!!</h1>
		</section>
	);
}

export default Home;
