import { useState, useEffect } from 'react';
import axios from 'axios';

/**
 * Personalized hook to fetch data from the API
 *
 * @param {string} path specific path to fetch data {optional}
 * @param {string} option specific option to fetch data {optional}
 * @returns {Array} data, isError, loading, errorMessage
 */
const useFetch = (/** @type {string} */ path, /** @type {string} */ option) => {
	// Define the state
	const [url, setUrl] = useState(null);
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);
	const [{ isError, errorMessage }, setError] = useState({ isError: false, errorMessage: '' });

	useEffect(() => {
		// If there no path provided, we use the JSON server url
		const urlToFetch = path ? path : 'http://localhost:8080/';
		setUrl(urlToFetch);
		if (!url) return;

		if (option) {
			setLoading(true);

			// Fetch the datas from the JSON-Server
			const fetchDatas = async (/** @type {string} */ url, /** @type {string} */ option) => {
				try {
					const response = await axios.get(url);
					console.log(response.data);
					setData(response);
					const datas = response.data;
					// const datas = JSON.parse(response.data.result[0].json);
					const filteredDatas = datas[option];
					// We convert the filteredDatas to an array
					// const renderedDatas = Object.keys(filteredDatas).map((key) => filteredDatas[key]);
					setData(filteredDatas);
					setLoading(false);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
					setLoading(false);
				}
			};
			fetchDatas(url, option);
		} else {
			setLoading(true);

			// Fetch the datas from the JSON-Server
			const fetchDatas = async (/** @type {string} */ url) => {
				try {
					const response = await axios.get(url);
					const datas = JSON.parse(response.data.result[0].json);
					setData(datas);
					setLoading(false);
				} catch (error) {
					setError({ isError: true, errorMessage: error.message });
					setLoading(false);
				}
			};
			fetchDatas(url);
		}
	}, [url, option, path]);

	return [data, isError, loading, errorMessage];
};

export default useFetch;
