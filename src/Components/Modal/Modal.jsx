import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Modalka, Overlay } from "./Modal.styled";

export const Modal = ({ img: { src, alt }, onClose }) => {

	useEffect(() => {
		const handleClickEsc = e => {
			if (e.code === 'Escape') onClose();
		};

		window.addEventListener('keydown', handleClickEsc);

		return () => {
			window.removeEventListener('keydown', handleClickEsc);
		};
	}, [onClose]);

	const handleClickBackdrop = e => {
		if (e.target === e.currentTarget) onClose();
	}

	return (
		<Overlay onClick={handleClickBackdrop}>
			<Modalka>
				<img src={src} alt={alt} />
			</Modalka>
		</Overlay>
	);
};

Modal.propTypes = {
	img: PropTypes.shape({
		src: PropTypes.string.isRequired,
		alt: PropTypes.string.isRequired,
	}).isRequired,
	onClose: PropTypes.func.isRequired,
};