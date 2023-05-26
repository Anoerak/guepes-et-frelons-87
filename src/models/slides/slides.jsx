// A model for the slides
// --------------------------------------------------------

// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// --------------------------------------------------------

/**
 * @typedef {Object} SlidesProps
 * @property {string} path
 * @property {string} alt
 * @property {function} onClick
 * @property {boolean} isDelete
 * @property {function} onDelete
 * @property {boolean} isEdit
 * @property {function} onEdit
 * @property {boolean} isAdd
 * @property {function} onAdd
 * @param {SlidesProps} props
 * @returns {JSX.Element}
 * @constructor
 * @description A model for the slides
 * @function Slides
 */

const Slides = (props) => {
	const { path, alt, onClick, isDelete, onDelete, isEdit, onEdit, isAdd, onAdd } = props;

	return (
		<>
			<img
				src={path}
				alt={alt}
				className='slide'
				// @ts-ignore
				onClick={onClick}
			/>
			{isDelete && (
				<button
					className='slides__delete'
					// @ts-ignore
					onClick={onDelete}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			)}
			{isEdit && (
				<button
					className='slides__edit'
					// @ts-ignore
					onClick={onEdit}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			)}
			{isAdd && (
				<button
					className='slides__add'
					// @ts-ignore
					onClick={onAdd}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			)}
		</>
	);
};

Slides.propTypes = {
	path: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	isDelete: PropTypes.bool,
	onDelete: PropTypes.func,
	isEdit: PropTypes.bool,
	onEdit: PropTypes.func,
	isAdd: PropTypes.bool,
	onAdd: PropTypes.func,
};

Slides.defaultProps = {
	onClick: () => {},
	isDelete: false,
	onDelete: () => {},
	isEdit: false,
	onEdit: () => {},
	isAdd: false,
	onAdd: () => {},
};

export default Slides;
