import React from 'react';

import useTitle from '@Utils/hooks/useTitle';
import TruckPicture from '@Images/target_pickup.png';
import HornetPicture from '@Images/target_hornet.png';
import Slideshow from '@Components/slideshow/Slideshow';
import FlyingBee from '@Components/flyingBee/FlyingBee';
import IntegratedForm from '@Components/forms/integrated_form/IntegratedForm';

import './Home.css';

function Home() {
	useTitle('Guêpes & Frelons 87 | Accueil');

	return (
		<section id='home'>
			<Slideshow />
			<FlyingBee
				title='Société de désinsectisation, dératisation et désinfection près de Limoges (87)'
				subtitle='Service de Piégeage et dépigeonnage '
			/>
			<article className='article__row__1'>
				<div className='left__side'>
					<p className='text'>
						Vous avez subi une infestation d'insectes ? Vous voulez vous débarrasser de nuisibles ?<br />
						<strong>Guêpes & Frelons 87</strong> la société de{' '}
						<a title='désinsectisation Saint-Yrieix-la-Perche' href='/desinsectisation'>
							<strong>désinsectisation,</strong>
						</a>{' '}
						<a title='dératisation Saint-Yrieix-la-Perche' href='/deratisation'>
							<strong>dératisation</strong>
						</a>{' '}
						et{' '}
						<strong>
							<a href='/desinfection'>désinfection</a>
						</strong>{' '}
						à <br />
						<strong>Saint-Yrieix-la-Perche</strong> près de <strong>Limoges</strong> en{' '}
						<strong>Haute-Vienne (87)</strong> est à votre disposition.
					</p>
					<img src={TruckPicture} alt='A_target_aiming_a_pickup_truck_with_the_company_branding' />
				</div>
				<div className='right__side'>
					<img src={HornetPicture} alt='A_target_aiming_at_a_hornet' />
					<p className='text'>
						Nous mettons à votre disposition une équipe de professionnels expérimentés.
						<br />
						Nos experts s'engagent à préserver l’écosystème avec des techniques et des produits respectueux
						de la faune et la flore.
					</p>
				</div>
			</article>

			<article className='article__row__2'>
				<div className='left__side'></div>
				<div className='right__side'>
					<h3>Des services variés</h3>
					<p className='top'>
						<strong>Guêpes & Frelons 87</strong> est une société expérimentée qui vous propose des services
						diversifiés :
					</p>
					<ul className='liste-puce1'>
						<li>
							<a title='désinsectisation 87' href='/desinsectisation'>
								Désinsectisation
							</a>
						</li>
						<li>
							<a title='dératisation Haute-vienne' href='/deratisation'>
								Dératisation
							</a>
						</li>
						<li>
							<a title='recuperation essaim abeille Haute-vienne' href='/recuperation-d-abeilles'>
								Récupération d'abeilles
							</a>
						</li>
						<li>
							<a title='désinfection Saint-Yrieix-la-Perche' href='/desinfection'>
								Désinfection
							</a>
						</li>
						<li>
							<a title='dépigeonnage Saint-Yrieix-la-Perche' href='/depigeonnage'>
								Dépigeonnage
							</a>
						</li>
						<li>
							<a title='piégeage Saint-Yrieix-la-Perche' href='/piegeage'>
								Piégeage
							</a>
						</li>
						<li>
							<a
								title='traitement bois charpente Saint-Yrieix-la-Perche'
								href='/traitement-du-bois-champignon'
							>
								Traitement du bois et du champignon
							</a>
						</li>
						<li>Détaupage</li>
					</ul>
					<p className='bottom'>
						<br />
						Pour bénéficier de notre expérience et notre savoir-faire, contactez-nous au{' '}
						<strong>
							<br />
							<a href='tel:0564172145' className='phone_link phone_google'>
								05 64 17 21 45
							</a>
						</strong>{' '}
						ou via notre{' '}
						<a title='Désinfection Saint-Yrieix-la-Perche' href='/contact'>
							formulaire en ligne
						</a>
						.
					</p>
				</div>
			</article>

			<article className='article__row__3'>
				<div className='left__side'>
					<h3>Notre zone d{"'"}intervention</h3>
					<p className='justify'>
						La société de{' '}
						<a title='désinfection 87' href='/desinfection'>
							<strong>désinfection</strong>
						</a>{' '}
						et de{' '}
						<a title='désinsectisation 87' href='/desinsectisation'>
							<strong>désinsectisation</strong>
						</a>{' '}
						<strong>Guêpes & Frelons 87</strong> opère dans un rayon de <strong>50 km</strong> autour de{' '}
						<strong>Saint-Yrieix-la-Perche (Haute-Vienne 87)</strong>.
					</p>
					<p>
						Nous opérons à <strong>Limoges</strong>, en <strong>Dordogne</strong> et en{' '}
						<strong>Corrèze</strong>.
					</p>
					<p>
						Notre équipe intervient rapidement dans un délai qui ne dépasse pas les 48h. Aucun frais
						supplémentaires ne vous seront facturés pour les interventions effectuées durant les dimanches
						et les jours fériés.
					</p>

					<img
						// @ts-ignore
						src={
							// eslint-disable-next-line no-undef
							require('@Images/Certibiocide.png')
						}
						alt='4_logos_about_ecology_certification'
					/>
				</div>
				<div className='right__side'></div>
			</article>

			<IntegratedForm />
		</section>
	);
}

export default Home;
