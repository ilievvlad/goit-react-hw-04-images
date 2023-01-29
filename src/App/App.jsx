import { Component } from "react";

import { ImageGallery } from "Components/ImageGallery/ImageGallery";
import { Searchbar } from "Components/Searchbar/Searchbar"
import { Modal } from "Components/Modal/Modal";
import { Button } from "Components/Button/Button";
import { Loader } from "Components/Loader/Loader";

import { getImages } from "Services/imgApi.js";

export class App extends Component {
	state = {
		images: [],
		search: '',
		page: 1,
		status: 'idle',
		showModal: false,
		currentImage: null
	}

	componentDidUpdate(_, prevState) {
		const { search, page } = this.state;

		if (prevState.search !== search || prevState.page !== page) {
			if (this.state.search !== '') {
				this.fetchData(search, page);
			}
		}
	}

	handleSearch = value => {
		this.setState({ images: [], search: value, page: 1 });
	}

	fetchData = async (search = '', page = 1) => {
		this.setState({ status: 'loading' });
		try {
			const data = await getImages(search, page);
			this.onResolve(data);
		} catch (error) {
			console.log(error);
			this.setState({ status: 'error' });
		}
	};

	onResolve({ hits, totalHits }) {
		if (totalHits < this.state.page * 12) {
			this.setState(({ images }) => ({
				images: [...images, ...newImages],
				status: 'idle',
			}));
			alert('No results.')
			return;
		}

		const newImages = hits.map(({ id, webformatURL, tags, largeImageURL }) => ({
			id, webformatURL, tags, largeImageURL
		}));
		this.setState(({ images }) => ({
			images: [...images, ...newImages],
			status: 'success'
		}));
	}

	handleToggleModal = () => {
		this.setState(({ showModal }) => ({ showModal: !showModal }));
	}

	handleClickImg = img => {
		this.handleToggleModal();
		this.setState({ currentImage: img });
	}

	handleClickLoadMoreBtn = () => {
		this.setState(prevState => ({
			page: prevState.page + 1
		}));
	};

	render() {
		const { images, status, showModal, currentImage } = this.state;

		return (
			<div className="wrapper" >
				<Searchbar onSubmit={this.handleSearch} />

				{images.length > 0 && (
					<ImageGallery onClick={this.handleClickImg} images={images} />
				)}

				{images.length > 0 && status === 'success' && (
					<Button onClick={this.handleClickLoadMoreBtn} />
				)}

				{status === 'loading' && <Loader />}

				{showModal && <Modal img={currentImage} onClose={this.handleToggleModal} />}
			</div>
		);
	}
};
