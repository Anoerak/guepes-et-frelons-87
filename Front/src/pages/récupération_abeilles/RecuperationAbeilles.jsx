import React from 'react';

import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import useTitle from '@Utils/hooks/useTitle';
import useFetchJson from '@Utils/hooks/useFetchJson';

import './RecuperationAbeilles.css';

function RecuperationAbeilles() {
	useTitle("G&F87 | Récupération d'abeilles");
	const [dataset] = useFetchJson(process.env.REACT_APP_API_URL, 'contactInfos');

	return (
		<section id='recuperation-abeilles' className='page__template'>
			<h1>Récupération d'abeilles </h1>
			<h2>Récupération essaim abeilles à Saint-Yrieix-la-Perche et près de Limoges en Haute-vienne (87)</h2>
			<h3>Votre apiculteur de proximité</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p>Un essaim d'abeilles vous pose un problème et vous avez besoin d'aide pour les retirer ?</p>
							<p>
								<strong>Guêpes et frelons 87</strong>&nbsp;se charge de traiter les essaims avec soins et contribue ainsi à
								leur sauvegarde.
							</p>
							<p>Les abeilles ne sont pas des insectes nuisibles, elles n’attaquent que si elles se sentent menacées.</p>
							<p>Néanmoins pour les faire éloigner sans problèmes, il faut faire appel à des spécialistes.</p>
							<p>
								Notre équipe commence par analyser la situation. En effet, le traitement des ruches diffère de celui des
								essaims et pour chaque opération il faut le matériel et les techniques adéquats.
							</p>
							<p>
								Le but est de récupérer la reine et une grande partie des abeilles ouvrières. Une fois les{' '}
								<strong>abeilles récupérées</strong>, nous les plaçons dans nos propres ruches.
							</p>
							<p>
								Pour bénéficier du savoir-faire de nos apiculteurs, contactez-nous au{' '}
								<strong>
									<a href='tel:+337604013' className='phone_link phone_google'>
										{dataset.phone}
									</a>
								</strong>{' '}
								ou via notre{' '}
								<a title='recuperation essaim abeille 87' href='/contact'>
									formulaire en ligne
								</a>
								.
							</p>
						</div>
					</div>
				</div>
				<div className='right__side'></div>
			</article>

			<IntegratedForm />
		</section>
	);
}

export default RecuperationAbeilles;
