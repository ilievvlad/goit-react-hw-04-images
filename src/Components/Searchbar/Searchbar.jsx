import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button, ButtonLabel, Form, Header, Input } from "./Searchbar.styled";

export const Searchbar = ({ onSubmit }) => {
	const [inputValue, setInputValue] = useState('');

	const handleChange = ({ target: { value } }) => {
		setInputValue(value);
	};

	const handleSearch = e => {
		e.preventDefault();
		onSubmit(inputValue.trim());
		setInputValue('');
	};


	return (
		<Header>
			<Form onSubmit={handleSearch}>
				<Button type="submit">
					<ButtonLabel>Search</ButtonLabel>
				</Button>
				<Input
					type="text"
					autocomplete="off"
					autoFocus
					placeholder="Search images and photos"
					onChange={handleChange}
					value={inputValue}
				/>
			</Form>
		</Header >
	);
};

Searchbar.propTypes = {
	onSubmit: PropTypes.func.isRequired,
};