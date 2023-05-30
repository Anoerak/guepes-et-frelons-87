import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '@App/store';
import App from '../App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	// eslint-disable-next-line no-undef
	expect(getByText(/learn react/i)).toBeInTheDocument();
});
