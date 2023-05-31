import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';

import Header from '@Components/header/Header';
import Footer from '@Components/footer/Footer';

import Home from '@Pages/home/Home';
import Actualites from '@Pages/actualites/Actualites';
import Contact from '@Pages/contact/Contact';
import NotFound from '@Pages/errors/not_found/NotFound';
import Depigeonnage from '@Pages/depigeonnage/Depigeonnage';
import Deratisation from '@Pages/deratisation/Deratisation';
import Desinfection from '@Pages/desinfection/Desinfection';
import Desinsectisation from '@Pages/desinsectisations/Desinsectisation';
import MentionLegales from '@Pages/mentions_legales/MentionsLegales';
import Piegeage from '@Pages/piegeage/Piegeage';
import RecuperationAbeilles from '@Pages/récupération_abeilles/RecuperationAbeilles';
import TraitementBois from '@Pages/traitement_bois/TraitementBoisChampi';

import FacebookLogo from '@Images/facebook-logo.png';
import InstagramLogo from '@Images/instagram-logo.png';
import PhoneLogo from '@Images/phone-logo.png';
import EmailLogo from '@Images/email-logo.png';

import '@Utils/styles/App.css';

export const Layout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route path='/' element={<Home />} />
					<Route path='/actualites' element={<Actualites />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/depigeonnage' element={<Depigeonnage />} />
					<Route path='/deratisation' element={<Deratisation />} />
					<Route path='/desinfection' element={<Desinfection />} />
					<Route path='/desinsectisation' element={<Desinsectisation />} />
					<Route path='/mentions-legales' element={<MentionLegales />} />
					<Route path='/piegeage' element={<Piegeage />} />
					<Route path='/recuperation-abeilles' element={<RecuperationAbeilles />} />
					<Route path='/traitements-bois-champignons' element={<TraitementBois />} />
				</Route>
				<Route path='*' element={<NotFound />} />
			</Routes>
			<div id='social-medias-links'>
				<a
					href='https://www.facebook.com/people/Gu%C3%AApes-Frelons-87/100063539562426/'
					target='_blank'
					rel='noreferrer'
				>
					<img src={FacebookLogo} alt='facebook' />
				</a>
				<a href='https://www.instagram.com/lerucherdenoah/?hl=fr' target='_blank' rel='noreferrer'>
					<img src={InstagramLogo} alt='instagram' />
				</a>
				<a href='mailto:contact@anti-nuisibles87.fr' target='_blank' rel='noreferrer'>
					<img src={EmailLogo} alt='email' />
				</a>
				<a href='tel:+337 60 40 13 48' target='_blank' rel='noreferrer'>
					<img src={PhoneLogo} alt='phone' />
				</a>
			</div>
		</div>
	);
}

export default App;
