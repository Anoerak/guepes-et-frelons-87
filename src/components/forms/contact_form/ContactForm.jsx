import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '@Hooks/useFetch';

import './ContactForm.css';

/**
 * @param {any} arg
 */
function ContactForm({ arg }) {
	const formPath = 'http://localhost:8080/';
	const formPathOption = arg;

	const [data, isError, loading, errorMessage] = useFetch(formPath, formPathOption);

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
				<form action='' method='POST'>
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
								></textarea>
							) : (
								<input
									type={item.type}
									name={item.name}
									id={item.id}
									placeholder={item.placeholder}
									required={item.required}
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
							/>
							<label htmlFor='rgpd1'></label>
						</div>
						<p>
							En cochant cette case, j’accepte que les données saisies dans le formulaire ci-dessus soient
							utilisées par www.anti-nuisible87.fr pour me recontacter dans le cadre de ma demande. Les
							destinataires sont www.anti-nuisible87.fr et seulement ce dernier. Pour plus d'informations
							sur le traitement de vos données et l'exercice de vos droits, reportez-vous à notre{' '}
							<a className='legals__link' href='/mentions_legales'>
								politique de confidentialité
							</a>
							.
						</p>
					</div>
					<div className='form__group'>
						<input className='submit__button' type='submit' value='Envoyer le formulaire' />
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
