import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from '@Components/header/Header';
import Footer from '@Components/footer/Footer';

import Home from '@Pages/home/Home';
import Deratisation from '@Pages/deratisation/Deratisation';
import Contact from '@Pages/contact/Contact';
import Devis from '@Pages/devis/Devis';

import '@Utils/styles/App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/deratisation' element={<Deratisation />} />
				<Route path='/devis' element={<Devis />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
