import PropTypes from 'prop-types';
import { Image, Item } from "./ImageGalleryItem.styled";

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, onClick }) => {

	return (
		<Item>
			<Image src={webformatURL} alt={tags} onClick={() => onClick({ src: largeImageURL, alt: tags })} />
		</Item>
	);
};

ImageGalleryItem.propTypes = {
	webformatURL: PropTypes.string.isRequired,
	tags: PropTypes.string.isRequired,
	largeImageURL: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
};