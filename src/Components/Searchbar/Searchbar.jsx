import { Component } from "react";
import PropTypes from 'prop-types';

import { Button, ButtonLabel, Form, Header, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
	static propTypes = {
		onSubmit: PropTypes.func.isRequired
	};

	state = {
		inputValue: ''
	}

	handleChange = e => {
		this.setState({
			inputValue: e.target.value
		})
	};

	handleSearch = e => {
		e.preventDefault();
		this.props.onSubmit(this.state.inputValue);
		this.setState({ inputValue: '' });
	};

	render() {
		return (
			<Header>
				<Form onSubmit={this.handleSearch}>
					<Button type="submit">
						<ButtonLabel>Search</ButtonLabel>
					</Button>
					<Input
						type="text"
						autocomplete="off"
						autoFocus
						placeholder="Search images and photos"
						onChange={this.handleChange}
						value={this.state.inputValue}
					/>
				</Form>
			</Header >
		);
	}
};