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
		</div>
	);
}

export default App;
