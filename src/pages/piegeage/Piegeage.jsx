/* eslint-disable no-irregular-whitespace */
import React from 'react';
import useTitle from '@Utils/hooks/useTitle';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import './Piegeage.css';

function Piegeage() {
	useTitle('G&F87 | Piegeage');

	return (
		<section id='piegeage'>
			<h1>Piégeage</h1>
			<h2>Piégeage et chasse passive à Saint-Yrieix-la-Perche près de Limoges en Haute-Vienne (87)</h2>
			<h3>Piégeage des nuisibles en Haute-vienne</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p>
								Votre champ a été saccagé par des animaux nuisibles ? Pas de panique la société de{' '}
								<strong>piégeage</strong> <strong>Guêpes et frelons 87</strong> va vous en débarrasser.
							</p>
							<p>
								Nous mettons à votre disposition des <strong>pièges pour animaux sauvage</strong> et
								nous nous chargeons également des opérations de <strong>détaupage</strong>.
							</p>
							<p>
								Maîtrisant à la perfection les techniques et les outils de la chasse passive, nos
								spécialistes du <strong>piégeage</strong> vont régler votre problème avec efficacité.
							</p>
							<p>
								Pour toutes nos opérations de <strong>piégeage</strong>, nous nous chargeons des
								démarches administratives nécessaires et nous veillons au respect de la réglementation.
							</p>
							<p>
								Pour bénéficier de notre expertise à <strong>Saint-Yrieix-la-Perche</strong> et dans les
								communes de la <strong>Haute-Vienne (87)</strong>, contactez-nous au{' '}
								<strong>05 64 17 21 45</strong> ou via notre{' '}
								<a title='Piégeage Haute-vienne' href='/contact'>
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

export default Piegeage;
