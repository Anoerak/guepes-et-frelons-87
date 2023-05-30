import React, { useEffect } from 'react';

import './NotFound.css';

function NotFound() {
	useEffect(() => {
		const jsFile = './bugsOnTheLoose.js';
		const script = document.createElement('script');
		script.src = jsFile;
		script.async = true;
		document.head.appendChild(script);

		// When the component is unmounted, clean up
		return () => {
			document.head.removeChild(script);
			document.querySelectorAll('.bug').forEach((bug) => {
				bug.remove();
			});
		};
	}, []);

	return (
		<section id='not-found'>
			<div className='not__found__content'>
				<h1>Oups</h1>
				<h2>Il semblerait que la page que vous cherchez n'existe pas.</h2>
				<h3>Profitez-en pour nettoyer la zone ou bien rejoignez-nous sur la page d{"'"}accueil</h3>
			</div>

			<button>
				<a href='/'>Accueil</a>
			</button>
		</section>
	);
}

export default NotFound;
