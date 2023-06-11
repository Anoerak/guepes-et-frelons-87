/* eslint-disable no-undef */
// We want to generate a Facebook access token that will be used to fetch the posts from the Facebook page.
// We gonna fetch it using a hook that we will create in the next step.

import { useState, useEffect } from 'react';

const generateFbToken = () => {
	const [token, setToken] = useState('');
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		setLoading(true);

		const fetchToken = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_CORS_ANYWHERE_PROXY}https://graph.facebook.com/oauth/access_token?client_id=${process.env.REACT_APP_FACEBOOK_APP_ID}&client_secret=${process.env.REACT_APP_FACEBOOK_APP_SECRET}&grant_type=client_credentials`
				);
				const data = await response.json();
				console.log(data);
				setToken(data.access_token);
				setLoading(false);
			} catch (error) {
				setError(true);
				setErrorMessage(error.message);
				setLoading(false);
			}
		};
		fetchToken();
	}, []);

	return { token, loading, error, errorMessage };
};

export default generateFbToken;
