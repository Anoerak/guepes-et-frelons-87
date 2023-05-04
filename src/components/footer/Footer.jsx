// Guêpes et Frelons 87 Footer component
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
	return (
		<div className='Footer'>
			<div className='FooterContent'>
				<div className='FooterMenu'>
					<Link to='/'>Accueil</Link>
					<Link to='/about'>Qui sommes-nous ?</Link>
					<Link to='/services'>Nos services</Link>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className='FooterContact'>
					<h3>Guêpes et Frelons 87</h3>
					<h4>Désinsectisation Dératisation Désinfection Traitement du bois</h4>
					<p>06 10 10 10 10</p>
					<p>
						guêpes et frelons
						<span className='FooterAt'>arobase</span>
						orange.fr
					</p>
				</div>
			</div>
			<div className='FooterLegal'>
				<p>Guêpes et Frelons 87 - 2021</p>
				<p>
					Site réalisé par{' '}
					<a href='https://www.linkedin.com/in/sebastien/' target='_blank' rel='noreferrer'>
						Sébastien
					</a>
				</p>
			</div>
		</div>
	);
}

export default Footer;
