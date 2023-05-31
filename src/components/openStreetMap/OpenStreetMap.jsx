import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import React from 'react';
import PropTypes from 'prop-types';
import 'leaflet/dist/leaflet.css';
import icon from '@Images/icon.png';
import L from 'leaflet';

import './OpenStreetMap.css';

const Map = ({ coords, display_name }) => {
	const { latitude, longitude } = coords;

	const customIcon = new L.Icon({
		iconUrl: icon,
		iconSize: [25, 35],
		iconAnchor: [5, 30],
	});

	function MapView() {
		let map = useMap();
		map.setView([latitude, longitude], map.getZoom());

		return null;
	}

	return (
		<MapContainer className='map' center={[latitude, longitude]} zoom={17} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> 
        contributors'
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
			/>
			<Marker icon={customIcon} position={[latitude, longitude]}>
				<Popup>{display_name}</Popup>
			</Marker>
			<MapView />
		</MapContainer>
	);
};

// Map PropTypes
Map.propTypes = {
	coords: PropTypes.object.isRequired,
	display_name: PropTypes.string.isRequired,
};

// Map default props
Map.defaultProps = {
	coords: {
		latitude: 45.51622,
		longitude: 1.17851,
	},
	display_name: 'Guêpes & Frelons 87 / Apiculture',
};

export default Map;
