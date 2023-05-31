import { useEffect } from 'react';

/**
 * @param {string} title
 */
const useTitle = (title) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};

export default useTitle;
