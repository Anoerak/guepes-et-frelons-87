import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';

import dataset from '@Utils/assets/data/dataset.json';
import head_logo from '@Utils/assets/images/head-logo.png';

import './Footer.css';

function Footer() {
	return (
		<footer>
			<div className='footer__container'>
				<div className='footer__content'>
					<div className='footer__content__left'>
						<div className='footer__content__left__logo'>
							<Link to='/'>
								<img src={head_logo} alt='logo-wasp-targeted' />
							</Link>
						</div>
						<div className='footer__content__left__text'>
							<p>Some text here</p>
						</div>
					</div>
					<div className='footer__content__right'>
						<h2>Contact</h2>
						<div className='direct__contact'>
							<div className='address'>
								<h3>
									<FontAwesomeIcon icon={faLocationDot} />
									Adresse
								</h3>
								<p>
									{dataset.contactInfos.address}
									<br />
									{dataset.contactInfos.zipCode} {dataset.contactInfos.city}
								</p>
							</div>
							<div className='phone'>
								<h3>
									<FontAwesomeIcon icon={faPhone} />
									Téléphone
								</h3>
								<a href='tel:+337604013'>{dataset.contactInfos.phone}</a>
							</div>
							<div className='mail'>
								<h3>
									<FontAwesomeIcon icon={faPaperPlane} />
									Email
								</h3>
								<a href='mailto:guepes.frelons87@gmail.com'>{dataset.contactInfos.email}</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='footer__bottom'>
				<p>© 2023 Guêpes et Frelons 87. Tous droits réservés.</p>
			</div>
		</footer>
	);
}

export default Footer;
