import React from 'react';
import useTitle from '@Utils/hooks/useTitle';

import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import './Desinsectisation.css';

function Desinsectisation() {
	useTitle('G&F87 | Desinsectisation');

	return (
		<section id='desinsectisation'>
			<h1>Désinsectisation</h1>
			<h2>Désinsectisation et traitement des punaises de lit à Saint-Yrieix-la-Perche près de Limoges (87)</h2>
			<h3>Société de désinsectisation à votre service </h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side__content'>
						<p>
							<strong>Guêpes et frelons 87</strong> est une entreprise spécialisée dans la{' '}
							<strong>désinsectisation</strong> à <strong>Saint-Yrieix-la-Perche</strong> près de{' '}
							<strong>Limoges</strong> en <strong>Haute-Vienne (87)</strong>.
						</p>
						<p>
							<br />
							Ce processus consiste à éliminer les insectes pouvant causer des maladies, des allergies,
							des crises d’asthme ou d’eczéma. Nous rappelons également que chez certains individus
							atteints par l’insectophobie, la simple vue de ce genre de créature peut causer des crises
							d’angoisses.
						</p>
						<p>
							<br />
							Conscients du désagrément <strong>causés par les nuisibles</strong>, nos experts ont mis en
							place des protocoles de <strong>désinsectisation</strong> qui ont fait leurs preuves. Notre
							équipe de professionnels se charge de vous débarrasser des différents types d’insectes qui
							peuvent vous gêner tels que :
						</p>
						<div className='lists'>
							<ul className='liste-puce2'>
								<li>Les guêpes et frelons</li>
								<li>Les blattes</li>
								<li>Les punaises</li>
							</ul>
							<ul className='liste-puce2'>
								<li>Les chenilles processionnaires du pin et du chêne</li>
								<li>Les cafards</li>
								<li>Les fourmis</li>
							</ul>
						</div>
						<p className='justify'>Nous procédons de la façon suivante :</p>
						<ul className='liste-puce2'>
							<li className='justify'>Analyse de la situation et étude de l’environnement</li>
							<li className='justify'>Identification de la source de la nuisance</li>
							<li className='justify'>Mise en place du protocole de traitement le mieux adapté</li>
							<li className='justify'>Réalisation de l’opération de désinsectisation</li>
						</ul>
						<p className='justify'>
							Grâce à nos experts, votre tranquillité ne sera plus gênée par la nuisance des insectes.
							Pour faire appel à nos professionnels, contactez-nous au{' '}
							<strong>
								<a href='tel:0564172145' className='phone_link phone_google'>
									05 64 17 21 45
								</a>
							</strong>{' '}
							ou via notre{' '}
							<a title='désinsectisation 87' href='/contact'>
								formulaire en ligne
							</a>
							.
						</p>
					</div>
				</div>
				<div className='right__side'></div>
			</article>

			<IntegratedForm />
		</section>
	);
}

export default Desinsectisation;
