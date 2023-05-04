import React from 'react';
import './ContactForm.css';

function ContactForm() {
	return (
		<div className='Contact__Form'>
			<div className='Contact__Form__Content'>
				<h1>Formulaire de contact</h1>
				<form>
					<div className='Contact__Form__Input'>
						<label htmlFor='name'>Nom</label>
						<input type='text' id='name' />
					</div>
					<div className='Contact__Form__Input'>
						<label htmlFor='email'>Email</label>
						<input type='email' id='email' />
					</div>
					<div className='Contact__Form__Input'>
						<label htmlFor='phone'>Téléphone</label>
						<input type='tel' id='phone' />
					</div>
					<div className='Contact__Form__Input'>
						<label htmlFor='message'>Message</label>
						<textarea id='message' />
					</div>
					<div className='Contact__Form__Input'>
						<button type='submit'>Envoyer</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ContactForm;
