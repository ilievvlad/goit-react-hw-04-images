import PropTypes from 'prop-types';

import { List } from "./ImageGallery.styled";
import { ImageGalleryItem } from 'Components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onClick, images }) => {
	return (
		<List>
			{images.map(({ id, webformatURL, tags, largeImageURL }) => (
				<ImageGalleryItem
					key={id}
					webformatURL={webformatURL}
					largeImageURL={largeImageURL}
					tags={tags}
					onClick={onClick}
				/>
			))}
		</List >
	);
};

ImageGallery.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string.isRequired,
			tags: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired
		}).isRequired
	).isRequired,
	onClick: PropTypes.func.isRequired,
};