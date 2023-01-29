import styled from 'styled-components';

export const Header = styled.header`
	position: sticky;
	z-index: 100;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 64px;
	padding: 12px 24px;
	background-color: var(--accent);
	box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
		0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Form = styled.form`
	display: flex;
	align-items: center;
	width: 100%;
	max-width: 600px;
	background-color: var(--lightGray);
	border-radius: 5px;
	overflow: hidden;
`;

export const Button = styled.button`
	display: inline-block;
	width: 48px;
	height: 48px;
	border: 0;
	background-image: url('https://cdn-icons-png.flaticon.com/512/5219/5219902.png');
	background-size: 70%;
	background-repeat: no-repeat;
	background-position: center;
	opacity: 0.6;
	transition: var(--anim);
	cursor: pointer;
	outline: none;

	&:hover {
 	 opacity: 1;
	}
`;

export const ButtonLabel = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	clip-path: inset(50%);
	border: 0;
`;

export const Input = styled.input`
	display: inline-block;
	width: 100%;
	font-size: 18px;
	border: none;
	outline: none;
	padding: 0 5px;
	background-color: inherit;

	&::placeholder {
		font-size: 18px;
	}
`;