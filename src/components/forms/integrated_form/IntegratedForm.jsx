import React from 'react';
import ContactForm from '@Components/forms/contact_form/ContactForm';

import './IntegratedForm.css';

function IntegratedForm() {
	return (
		<article className='article__row__4'>
			<div className='left__side'></div>
			<div className='right__side'>
				<h3>Plus d'informations ?</h3>
				<p>Vous avez des questions, souhaitez obtenir des informations ou recevoir un devis ?</p>
				<fieldset>
					<legend>Contactez-nous</legend>
					<ContactForm arg='contactForm' />
				</fieldset>
			</div>
		</article>
	);
}

export default IntegratedForm;
