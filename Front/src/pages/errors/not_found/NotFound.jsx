import React from 'react';
import useTitle from '@Utils/hooks/useTitle';
import importScript from '@Utils/hooks/importScript';

import './NotFound.css';

function NotFound() {
	useTitle('G&F87 | 404');

	importScript('./js/bugsOnTheLoose.js');

	return (
		<section id='not-found'>
			<div className='not__found__content'>
				<h1>
					4{'     '}
					<span className='vertical__text'>
						<h1>O</h1>
						<span>ups</span>
					</span>
					{'     '}4
				</h1>
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
