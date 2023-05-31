import React, { useEffect, useState } from 'react';

import useTitle from '@Utils/hooks/useTitle';
import ContactForm from '@Components/forms/contact_form/ContactForm';
import Map from '@Components/openStreetMap/OpenStreetMap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './Contact.css';

function Contact() {
	useTitle('G&F87 | Contact');

	const [coords, setCoords] = useState({
		latitude: 39.7837304,
		longitude: -100.4458825,
	});
	const [display_name, setName] = useState('');

	useEffect(() => {
		setCoords({
			latitude: 45.51622,
			longitude: 1.17851,
		});
		setName('Guêpes & Frelons 87 / Apiculture');
	}, []);

	return (
		<section id='contact'>
			<h1>Contact</h1>
			<h2>Spécialiste de Dépigeonnage, Piégeage et Désinfection en Haute-vienne (87)</h2>
			<main>
				<article className='left__side'>
					<h3>Vous</h3>
					<ContactForm arg='contactForm' />
				</article>
				<article className='right__side'>
					<div className='nous'>
						<h3>Guêpes et Frelons 87</h3>
						<div className='coordonnees'>
							<ul className='contact_coordonnees'>
								<li>Guêpes & Frelons 87</li>
								<li>Lieu Dit Pierrebrune</li>
								<li>87500 Saint Yrieix La Perche France</li>
							</ul>

							<ul className='contact_coordonnees'>
								<li>
									<FontAwesomeIcon icon={faPhone} title='Téléphone' />
									05 64 17 21 45
								</li>
								<li>
									<FontAwesomeIcon icon={faEnvelope} title='Email' />
									<a href='mailto:contact@anti-nuisible87.fr' title='E-mail'>
										contact@anti-nuisible87.fr
									</a>
								</li>
							</ul>
						</div>
						<Map coords={coords} display_name={display_name} />
					</div>
				</article>
			</main>
		</section>
	);
}

export default Contact;
