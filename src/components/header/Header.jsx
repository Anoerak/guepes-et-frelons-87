import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import head_logo from '@Utils/assets/images/head-logo.png';
import dataset from '@Utils/assets/data/dataset.json';

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [activeId, setActiveId] = useState(0);
	const [navbar, setNavbar] = useState(null);
	const [hamburgerMenu, setHamburgerMenu] = useState(null);
	const [navbarContainer, setNavbarContainer] = useState(null);
	const [navMenu, setNavMenu] = useState(null);

	function mobileMenu() {
		if (hamburgerMenu.classList.contains('active')) {
			navMenu.classList.remove('active');
			hamburgerMenu.classList.remove('active');
			navbarContainer.classList.remove('active');
			navbar.classList.remove('active');
		} else {
			navMenu.classList.add('active');
			hamburgerMenu.classList.add('active');
			navbarContainer.classList.add('active');
			navbar.classList.add('active');
			//
		}
	}
	useEffect(() => {
		setNavbar(document.querySelector('.navbar'));
		setHamburgerMenu(document.querySelector('.hamburger__menu__icon'));
		setNavbarContainer(document.querySelector('.navbar__container'));
		setNavMenu(document.querySelector('.nav__menu'));
	}, [hamburgerMenu, navbar, navbarContainer, navMenu]);

	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Link to='/' className='navbar__logo'>
					<img src={head_logo} alt='logo-wasp-targeted' />
				</Link>
				<ul className='nav__menu'>
					{dataset.navbarLinks.map((item) => {
						return (
							<li key={item.id}>
								<Link
									to={item.path}
									className={'nav__links ' + (activeId === item.id ? ' active' : '')}
									onClick={() => {
										setActiveId(item.id);
										mobileMenu();
									}}
								>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
				<FontAwesomeIcon
					onClick={() => {
						mobileMenu();
					}}
					className='hamburger__menu__icon'
					icon={faBars}
				/>
				{/* <div className='hamburger__menu__icon'></div> */}
			</div>
		</nav>
	);
}

export default Header;
