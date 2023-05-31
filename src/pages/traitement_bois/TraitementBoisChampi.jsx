/* eslint-disable no-irregular-whitespace */
import React from 'react';
import useTitle from '@Utils/hooks/useTitle';

import './TraitementBoisChampi.css';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

function TraitementBoisChampi() {
	useTitle('G&F87 | TraitementBoisChampi');

	return (
		<section id='traitement-bois-champi'>
			<h1>Traitement du bois champignon </h1>
			<h2>
				Traitement du bois charpente et de champignons à Saint-Yrieix-la-Perche près de Limoges en Haute-Vienne
				(87)
			</h2>
			<h3>Traitement fongicide</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p className='justify'>
								Nombreux sont les <strong>champignons</strong>, les <strong>termites</strong> et les
								insectes qui peuvent attaquer le bois de votre habitation et provoquer d’importantes
								dégradations.
							</p>
							<p>
								Leur traitement est donc indispensable pour garantir votre bien-être et le confort de
								votre espace de vie.
							</p>
							<p>
								<strong>Guêpes et frelons 87</strong> est une entreprise spécialisée dans le{' '}
								<strong>traitement fongicide</strong> du <strong>bois</strong> et de la moisissure des
								murs à <strong>Saint-Yrieix-la-Perche</strong> en <strong>Haute-Vienne (87)</strong>.
							</p>
							<p>
								Forte d’un savoir-faire reconnu, notre équipe vous garantit un{' '}
								<strong>traitement</strong> rapide et efficace.
							</p>
							<p>Professionnels et qualifiés, nous vous proposons un traitement méthodique :</p>
							<ul className='liste-puce2'>
								<li>
									Etudes approfondies des locaux et détermination du type d'insectes et champignons
									présents
								</li>
								<li>Mise en place du traitement adéquat</li>
								<li>Application des mesures préventives</li>
							</ul>
							<p>
								Soucieux de votre satisfaction, nos experts se chargent de l'élimination des{' '}
								<strong>champignons</strong> et des <strong>termites</strong> présentant une menace pour
								vos structures en bois. Nous mettons tout en œuvre pour pérenniser et protéger vos
								biens.
							</p>
							<p>
								Pour faire appel à nos spécialistes, contactez-nous au{' '}
								<strong>
									<a href='tel:0564172145' className='phone_link phone_google'>
										05 64 17 21 45
									</a>
								</strong>{' '}
								ou via notre{' '}
								<a title='traitement bois charpente 87' href='/contact'>
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

export default TraitementBoisChampi;
