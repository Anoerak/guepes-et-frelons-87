import React from 'react';
import useTitle from '@Utils/hooks/useTitle';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import './Deratisation.css';

function Deratisation() {
	useTitle('G&F87 | Deratisation');
	return (
		<section id='deratisation' className='page__template'>
			<h1>Dératisation</h1>
			<h2>Dératisation à Saint-Yrieix-la-Perche près de Limoges en Haute-Vienne (87)</h2>
			<h3>Appâts pour rongeurs et raticides à Limoges en Haute-vienne (87)</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p>
								Vous avez des <strong>rats</strong> dans votre cave ? Besoin d’un spécialiste en{' '}
								<strong>dératisation</strong> ? Fiez-vous à l’expertise de{' '}
								<strong>Guêpes et frelons 87</strong> à <strong>Saint-Yrieix-la-Perche</strong> près de{' '}
								<strong>Limoges</strong> en <strong>Haute-Vienne (87)</strong> !
							</p>
							<p>
								Conscients de la nuisance représentée par ces rongeurs, nous mettons à votre disposition
								des produits et des moyens techniques performants comme les pièges à souris, les appâts
								et les substances actives.
							</p>
							<p>
								Soucieux de votre satisfaction, nous nous appliquons à vous fournir des interventions de
								qualité dans les plus brefs des délais.
							</p>
							<p>
								Pour toutes nos opérations de <strong>dératisation</strong>, nous procédons de la
								manière suivante:
							</p>
							<ul className='liste-puce2'>
								<li>Mise en place d’un plan d’action</li>
								<li>Préparation des appâts et des dispositifs de piégeages</li>
								<li>Condamnation des trous et des moyens d’accès</li>
								<li>Elimination des rongeurs</li>
							</ul>
							<p>
								Pour des renseignements complémentaires, contactez vos{' '}
								<strong>spécialistes en dératisation</strong> au{' '}
								<strong>
									<a href='tel:0564172145' className='phone_link phone_google'>
										05 64 17 21 45
									</a>
								</strong>{' '}
								ou via le{' '}
								<a title='dératisation 87' href='/contact'>
									formulaire en ligne
								</a>{' '}
								!
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

export default Deratisation;
