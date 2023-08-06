// @ts-nocheck
/* eslint-disable no-undef */
import React from 'react';
import useTitle from '@Utils/hooks/useTitle';

import fetchFacebook from '@Hooks/facebook/fetchFacebook';
import generateFbToken from '@Utils/hooks/facebook/generateFbToken';
// import { FacebookEmbed } from 'react-social-media-embed';

function Actualites() {
	useTitle('G&F87 | Actualites');
	const { token } = generateFbToken();

	const { posts } = fetchFacebook(process.env.REACT_APP_FACEBOOK_PAGE_ID, token, 5);

	console.log('Page Id: ' + process.env.REACT_APP_FACEBOOK_PAGE_ID, 'Token: ' + token, 'Datas:' + posts);

	return (
		// <EmbedToggler defaultToggledOn>
		<div
			style={{
				display: 'flex',
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			{/* {posts.map((post) => (
				<FacebookEmbed
					key={post.id}
					url={`https://www.facebook.com/ExploreMovementSay/posts/${post.id.split('_')[1]}`}
				/>
			))} */}
		</div>
		// </EmbedToggler>
	);
}

export default Actualites;
