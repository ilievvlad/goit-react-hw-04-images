import { Component } from "react";
import PropTypes from 'prop-types';

import { Modalka, Overlay } from "./Modal.styled";

export class Modal extends Component {

	static propTypes = {
		img: PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		}).isRequired,
		onClose: PropTypes.func.isRequired
	};

	componentDidMount() {
		window.addEventListener('keydown', this.handleClickEsc);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleClickEsc);
	}

	handleClickEsc = e => {
		if (e.code === 'Escape') {
			this.props.onClose();
		}
	}

	handleClickBackdrop = e => {
		if (e.target === e.currentTarget) {
			this.props.onClose();
		}
	}

	render() {
		const { img: { src, alt } } = this.props;

		return (
			<Overlay onClick={this.handleClickBackdrop}>
				<Modalka>
					<img src={src} alt={alt} />
				</Modalka>
			</Overlay>
		);
	}
};