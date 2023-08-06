import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { store } from '@App/store';

import App from './App';

import '@Styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	// <React.StrictMode>
	<Router>
		<Provider store={store}>
			<ErrorBoundary fallback={<div>Something went wrong...</div>}>
				<App />
			</ErrorBoundary>
		</Provider>
	</Router>
	// </React.StrictMode>
);
