/* eslint-disable no-undef */
import React from 'react';

import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';

import useFetchJson from '@Utils/hooks/useFetchJson';
import head_logo from '@Utils/assets/images/head-logo.png';

import './Footer.css';

function Footer() {
	const [dataset] = useFetchJson(process.env.REACT_APP_API_URL, 'contactInfos');
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
									{dataset.address}
									<br />
									{dataset.zipCode} {dataset.city}
								</p>
							</div>
							<div className='phone'>
								<h3>
									<FontAwesomeIcon icon={faPhone} />
									Téléphone
								</h3>
								<a href='tel:+337604013'>{dataset.phone}</a>
							</div>
							<div className='mail'>
								<h3>
									<FontAwesomeIcon icon={faPaperPlane} />
									Email
								</h3>
								<a href='mailto:guepes.frelons87@gmail.com'>{dataset.email}</a>
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
