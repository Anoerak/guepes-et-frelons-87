import React from 'react';
import useTitle from '@Utils/hooks/useTitle';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';
import useFetchJson from '@Utils/hooks/useFetchJson';

import './Desinfection.css';

function Desinfection() {
	useTitle('G&F87 | Desinfection');
	const [dataset] = useFetchJson(process.env.REACT_APP_API_URL, 'contactInfos');

	return (
		<section id='desinfection' className='page__template'>
			<h1>Désinfection</h1>
			<h2>Opérations de désinfection à Saint-Yrieix-la-Perche près de Limoges en Haute-Vienne (87)</h2>
			<h3>Désinfection et contrôle des nuisibles</h3>

			<article className='article__row__1'>
				<div className='left__side'>
					<div className='left__side'>
						<div className='left__side__content'>
							<p>
								<strong>Guêpes et frelons 87</strong> vous propose un service de <strong>désinfection</strong> à{' '}
								<strong>Saint-Yrieix-la-Perche</strong> près de <strong>Limoges</strong> en{' '}
								<strong>Haute-Vienne (87)</strong>.
							</p>
							<p>
								La <strong>désinfection</strong> est une action préventive dont le but est d’empêcher la prolifération des
								bactéries et des agents pathogènes. Elle doit être effectuée d’une façon rapide et efficace afin de vous
								éviter tout risque de contamination.
							</p>
							<p>Nos spécialistes ont été formés pour intervenir dans des situations variées tels que:</p>
							<ul className='liste-puce2'>
								<li>Nettoyage des impuretés causés par les pigeons</li>
								<li>Désinfection dans les locaux professionnels</li>
								<li>Désinfection dans tous les lieux où il y a risque de contamination</li>
							</ul>
							<p>
								Nous mettons à votre disposition une équipe de professionnels, ponctuels et efficaces qui vous accompagnent
								tout au long des étapes du processus. Notre équipe s’engage à vous fournir un travail soigné et intervient
								dans les plus brefs des délais.
							</p>
							<p>
								Nos professionnels commencent par étudier l’état du lieu de l’infection. Ils évaluent le degré de la menace
								et établissent un plan d’action. Ensuite nos experts se chargent de la préparation du matériel nécessaire
								pour l’opération de la décontamination. Enfin nous procédons à la <strong>désinfection</strong> en éliminant
								tous les risques de contamination.
							</p>
							<p>
								Pour bénéficier de notre service, contactez-nous au{' '}
								<strong>
									<a href='tel:+337604013' className='phone_link phone_google'>
										{dataset.phone}
									</a>
								</strong>{' '}
								ou via notre{' '}
								<a title='Désinfection Haute-vienne' href='/contact'>
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

export default Desinfection;
