import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Deratisation from './pages/deratisation/Deratisation';
import Contact from './pages/contact/Contact';
import Devis from './pages/devis/Devis';

import './utils/styles/App.css';

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
