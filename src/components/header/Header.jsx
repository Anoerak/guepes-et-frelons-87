/* eslint-disable no-undef */
import React, { useCallback, useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import head_logo from '@Images/head-logo.png';
import useFetchJson from '@Utils/hooks/useFetchJson';

import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
	const [activeId, setActiveId] = useState(0);
	const [navbar, setNavbar] = useState(null);
	const [hamburgerMenu, setHamburgerMenu] = useState(null);
	const [navbarContainer, setNavbarContainer] = useState(null);
	const [navMenu, setNavMenu] = useState(null);
	const [dataset, isError, loading, errorMessage] = useFetchJson(process.env.REACT_APP_API_URL, 'navbarLinks');

	function mobileMenu() {
		if (hamburgerMenu.classList.contains('active')) {
			navMenu.classList.remove('active');
			hamburgerMenu.classList.remove('active');
			navbarContainer.classList.remove('active');
			navbar.classList.remove('active');
			document.getElementsByTagName('section')[0].style.display = 'block';
			document.getElementsByTagName('footer')[0].style.display = 'flex';
		} else {
			navMenu.classList.add('active');
			hamburgerMenu.classList.add('active');
			navbarContainer.classList.add('active');
			navbar.classList.add('active');
			document.getElementsByTagName('section')[0].style.display = 'none';
			document.getElementsByTagName('footer')[0].style.display = 'none';
		}
	}

	const handleScroll = useCallback(() => {
		if (window.scrollY > 100 && window.innerWidth > 768 && navMenu !== null) {
			navMenu.classList.add('scroll__header');
		} else {
			navMenu.classList.remove('scroll__header');
		}
	}, [navMenu]);

	useEffect(() => {
		setNavbar(document.querySelector('.navbar'));
		setHamburgerMenu(document.querySelector('.hamburger__menu__icon'));
		setNavbarContainer(document.querySelector('.navbar__container'));
		setNavMenu(document.querySelector('.nav__menu'));

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [hamburgerMenu, navbar, navbarContainer, navMenu, handleScroll]);

	return (
		<nav className='navbar'>
			<div className='navbar__container'>
				<Link to='/' className='navbar__logo'>
					<img src={head_logo} alt='logo-wasp-targeted' />
				</Link>
				<ul className='nav__menu'>
					{loading ? (
						<p>Loading...</p>
					) : isError ? (
						<p>{errorMessage}</p>
					) : (
						<>
							{dataset.map((item) => {
								return (
									<li key={item.id}>
										<Link
											to={item.path}
											className={'nav__links ' + (activeId === item.id ? ' active' : '')}
											onClick={() => {
												setActiveId(item.id);
												// If windows.innerWidth is less than 768px, then close the menu
												if (window.innerWidth < 768) {
													mobileMenu();
												}
											}}
										>
											{item.title}
										</Link>
									</li>
								);
							})}
						</>
					)}
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
