import { useState, useEffect } from 'react';

import { ImageGallery } from "Components/ImageGallery/ImageGallery";
import { Searchbar } from "Components/Searchbar/Searchbar"
import { Modal } from "Components/Modal/Modal";
import { Button } from "Components/Button/Button";
import { Loader } from "Components/Loader/Loader";

import { getImages } from "Services/imgApi.js";

export const App = () => {
	const [images, setImages] = useState([]);
	const [search, setSearch] = useState('');
	const [page, setPage] = useState(1);
	const [status, setStatus] = useState('idle');
	const [showModal, setShowModal] = useState(false);
	const [currentImage, setCurrentImage] = useState(null);

	const handleSearch = value => {
		setImages([]);
		setSearch(value);
		setPage(1);
	}

	useEffect(() => {
		const images = async (search = '', page = 1) => {
			setStatus('loading');
			try {
				const data = await getImages(search, page);
				onResolve(data);
			} catch (error) {
				console.log(error);
				setStatus('error');
			}
		};

		const onResolve = ({ hits, totalHits }) => {
			const newImages = hits.map(
				({ id, webformatURL, tags, largeImageURL }) => ({
					id, webformatURL, tags, largeImageURL,
				})
			);

			if (totalHits < page * 12) {
				setImages(images => [...images, ...newImages]);
				setStatus('idle');
				alert('No results.')
				return;
			}
			setImages(images => [...images, ...newImages]);
			setStatus('success');
		};

		if (search === '') return;
		images(search, page);
	}, [search, page]);

	const handleToggleModal = () => {
		setShowModal(!showModal);
	}

	const handleClickImg = img => {
		handleToggleModal();
		setCurrentImage(img);
	}

	const handleClickLoadMoreBtn = () => {
		setPage(state => state + 1);
	};

	return (
		<div className="wrapper" >
			<Searchbar onSubmit={handleSearch} />

			{images.length > 0 && (
				<ImageGallery onClick={handleClickImg} images={images} />
			)}

			{images.length > 0 && status === 'success' && (
				<Button onClick={handleClickLoadMoreBtn} />
			)}

			{status === 'loading' && <Loader />}

			{showModal && <Modal img={currentImage} onClose={handleToggleModal} />}
		</div>
	);
};
