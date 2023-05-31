import { useEffect } from 'react';

const importScript = (/** @type {string} */ path) => {
	useEffect(() => {
		const script = document.createElement('script');

		script.src = path;
		script.async = true;
		script.type = 'module';

		document.body.appendChild(script);

		return () => {
			document.body.removeChild(script);
		};
	}, [path]);
};

export default importScript;
