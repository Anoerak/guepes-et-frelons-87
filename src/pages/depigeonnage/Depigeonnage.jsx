/* eslint-disable no-irregular-whitespace */
import React from 'react';
import useTitle from '@Utils/hooks/useTitle';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import './Depigeonnage.css';

function Depigeonnage() {
	useTitle('G&F87 | Depigeonnage');
	return (
		<section id='depigeonnage' className='page__template'>
			<h1>Dépigeonnage</h1>
			<h2>Dépigeonnage à Saint-Yrieix-la-Perche près de Limoges en Haute-Vienne​ (87)</h2>
			<h3>Traitement des pigeons en Haute-vienne (87)</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p className='justify'>
								<strong>Guêpes et frelons 87</strong> se charge également des opérations de{' '}
								<strong>dépigeonnage</strong> à <strong>Saint-Yrieix-la-Perche près de Limoges </strong>
								en <strong>Haute-Vienne​ (87)</strong>.
							</p>
							<p>Les pigeons sont des volatiles pouvant vous causer des désagréments tels que :</p>
							<ul className='liste-puce2'>
								<li>
									Les problèmes de santé causés par la transmission d’agents pathogènes et de
									parasites
								</li>
								<li>La dégradation des bâtiments et la salissure</li>
								<li>L’attraction des rats qui se nourrissent de leurs œufs</li>
								<li>La gêne causée par leurs bruits et leurs mauvaises odeurs</li>
							</ul>
							<p className='justify'>
								Afin de vous préserver de la nuisance causée par les <strong>pigeons</strong>, nous
								utilisons des moyens de{' '}
								<strong>dépigeonnage mécaniques, électriques, visuels et sonores</strong> :
							</p>
							<ul className='liste-puce2'>
								<li>Dispositifs de piégeages</li>
								<li>Fils tendus</li>
								<li>Système d’électro-répulsion</li>
								<li>Pics à pigeons</li>
								<li>Filets</li>
								<li>Répulsif visuel</li>
							</ul>
							<p>
								Pour bénéficier de notre service de <strong>dépigeonnage</strong>, contactez-nous au{' '}
								<strong>
									<a href='tel:0564172145' className='phone_link phone_google'>
										05 64 17 21 45
									</a>
								</strong>{' '}
								ou via notre{' '}
								<a title='dépigeonnage Haute-vienne' href='/contact'>
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

export default Depigeonnage;
