/* eslint-disable no-undef */
// A hook to fetch posts from a facebook page
// Usage: const { posts, loading, error } = useFacebook('pageId', 'accessToken', 5);

import { useState, useEffect } from 'react';

const fetchFacebook = (
	/** @type {number} */ pageId,
	/** @type {string} */ accessToken,
	/** @type {number} */ limit
) => {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	useEffect(() => {
		setLoading(true);

		const fetchPosts = async (
			/** @type {number} */ pageId,
			/** @type {string} */ accessToken,
			/** @type {number} */ limit
		) => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_CORS_ANYWHERE_PROXY}https://graph.facebook.com/v10.0/${pageId}/posts?access_token=${accessToken}&limit=${limit}`
				);
				const data = await response.json();
				console.log(data);
				setPosts(data.data);
				setLoading(false);
			} catch (error) {
				setError(true);
				setErrorMessage(error.message);
				setLoading(false);
			}
		};
		fetchPosts(pageId, accessToken, limit);
	}, [pageId, accessToken, limit]);

	return { posts, loading, error, errorMessage };
};

export default fetchFacebook;
