// Guêpes et Frelons 87 Header

import React from 'react';

import { Link } from 'react-router-dom';

import head_logo from '../../utils/assets/images/head-logo.png';

import './Header.css';

function Header() {
	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Link to='/' className='navbar__logo'>
					<img src={head_logo} alt='logo-wasp-targeted' />
				</Link>
				<ul className='nav__menu'>
					<li>
						<Link to='/' className='nav__links'>
							Accueil
						</Link>
					</li>
					<li>
						<Link to='/desinsectisations' className='nav__links'>
							Désinsectisation
						</Link>
					</li>
					<li>
						<Link to='/deratisation' className='nav__links'>
							Dératisation
						</Link>
					</li>
					<li>
						<Link to='/desinfection' className='nav__links'>
							Désinfection
						</Link>
					</li>
					<li>
						<Link to='/traitement-bois' className='nav__links'>
							Traitement bois
						</Link>
					</li>
					<li>
						<Link to='/actualites' className='nav__links'>
							Actualités
						</Link>
					</li>
					<li>
						<Link to='/devis' className='nav__links'>
							Devis
						</Link>
					</li>
					<li>
						<Link to='/contact' className='nav__links'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;
