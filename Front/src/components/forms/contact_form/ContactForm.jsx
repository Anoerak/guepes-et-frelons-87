/* eslint-disable no-undef */
import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import useFetchJson from '@Hooks/useFetchJson';

import './ContactForm.css';

/**
 * @param {any} arg
 */
function ContactForm({ arg }) {
	const formPath = process.env.REACT_APP_API_URL;
	const formPathOption = arg;
	const [checkBoxDisabled, setCheckBoxDisabled] = useState(true);
	const [submitButtonDisabled, setSubmitButtonDisabled] = useState(true);

	const [data, isError, loading, errorMessage] = useFetchJson(formPath, formPathOption);

	// We use a callback function to avoid infinite loop
	const listeningInputs = useCallback(() => {
		const inputs = [];
		inputs.push(document.querySelector('input[name="name"]'));
		inputs.push(document.querySelector('input[name="firstname"]'));
		inputs.push(document.querySelector('input[name="email"]'));
		inputs.push(document.querySelector('input[name="phone"]'));
		inputs.push(document.querySelector('textarea[name="message"]'));

		// @ts-ignore
		const formIsFilled = inputs.every((input) => input.value !== '');

		// @ts-ignore
		const checkBoxChecked = document.querySelector('input[name="rgpd1"]').checked;

		const checkForm = (form, checkbox) => {
			console.log('checkbox', checkbox);
			if (form) {
				setCheckBoxDisabled(false);
				if (checkbox === true) {
					setSubmitButtonDisabled(false);
				}
			} else {
				setCheckBoxDisabled(true);
				setSubmitButtonDisabled(true);
			}
		};

		checkForm(formIsFilled, checkBoxChecked);
	}, []);

	useEffect(() => {
		return () => {};
	}, [data, isError, loading, errorMessage]);

	return (
		<>
			{loading ? (
				<p>Loading...</p>
			) : isError ? (
				<p>{errorMessage}</p>
			) : (
				<form action='php/mail.php' method='POST'>
					{data.map((item, index) => (
						<div className='form__group' key={index}>
							{item.type === 'textarea' ? (
								<textarea
									name={item.name}
									id={item.id}
									placeholder={item.placeholder}
									cols={item.cols}
									rows={item.rows}
									required={item.required}
									onChange={listeningInputs}
								></textarea>
							) : (
								<input
									type={item.type}
									name={item.name}
									id={item.id}
									placeholder={item.placeholder}
									required={item.required}
									onChange={listeningInputs}
								/>
							)}
						</div>
					))}
					<div className='wrap__rgpd'>
						<div className='customCheckbox'>
							<input
								type='checkbox'
								value='
								J’accepte que les données saisies dans le formulaire soient utilisées pour me recontacter dans le cadre de ma demande'
								id='rgpd1'
								name='rgpd1'
								required={true}
								onChange={listeningInputs}
								disabled={checkBoxDisabled}
							/>
							<label htmlFor='rgpd1'></label>
						</div>
						<p>
							En cochant cette case, j’accepte que les données saisies dans le formulaire ci-dessus soient
							utilisées par www.anti-nuisible87.fr pour me recontacter dans le cadre de ma demande. Les
							destinataires sont www.anti-nuisible87.fr et seulement ce dernier. Pour plus d'informations
							sur le traitement de vos données et l'exercice de vos droits, reportez-vous à notre{' '}
							<a className='legals__link' href='/mentions-legales'>
								politique de confidentialité
							</a>
							.
						</p>
					</div>
					<div className='form__group button'>
						<input
							className='submit__button'
							type='submit'
							value='Envoyer le formulaire'
							disabled={submitButtonDisabled}
						/>
					</div>
				</form>
			)}
		</>
	);
}

// arg prop is required and must be a string
ContactForm.propTypes = {
	arg: PropTypes.string.isRequired,
};

export default ContactForm;
