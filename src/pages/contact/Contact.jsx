import React from 'react';

import ContactForm from '@Components/forms/contact_form/ContactForm';

function Contact() {
	return (
		<>
			<h1>Contact</h1>
			<h2>Spécialiste de Dépigeonnage, Piégeage et Désinfection en Haute-vienne (87)</h2>
			<section>
				<article className='left__side'>
					<h3>Vous</h3>
					<ContactForm arg='contactForm' />
				</article>
				<article className='right__side'>
					<h3>Nous</h3>
					<div className='coordonnees'>
						<ul className='contact_coordonnees'>
							<li>Guêpes & Frelons 87</li>
							<li>Lieu Dit Pierrebrune</li>
							<li>87500 Saint Yrieix La Perche France</li>
						</ul>

						<ul className='contact_coordonnees'>
							<li>
								<i className='fas fa-phone fa-flip-horizontal' aria-hidden='true' title='Téléphone'></i>
								05 64 17 21 45
							</li>
							<li>
								<i className='fas fa-envelope' aria-hidden='true' title='E-mail'></i>;
								<img
									src='data:image/png;base64,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'
									alt='E-mail Guêpes & Frelons 87'
								/>
							</li>
						</ul>
					</div>
				</article>
			</section>
		</>
	);
}

export default Contact;
