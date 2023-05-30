import React from 'react';

import './FlyingBee.css';

function FlyingBee(props) {
	// We get the title and subtitle from the props
	const { title, subtitle } = props;

	return (
		<div className='wrap'>
			<h1>{title}</h1>
			<h2>{subtitle}</h2>
			<div className='wrap2'>
				<div className='body'></div>
				<div className='wing1'></div>
				<div className='wing2'></div>
				<div className='stinger'></div>
				<div className='eyes'>
					<div className='pupil'></div>
				</div>
			</div>
			<div className='cloud1'></div>
			<div className='cloud2'></div>
			<div className='cloud3'></div>

			<div className='debri1'></div>
			<div className='debri2'></div>
			<div className='debri3'></div>
			<div className='debri4'></div>
			<div className='debri5'></div>
			<div className='debri6'></div>
		</div>
	);
}

export default FlyingBee;
