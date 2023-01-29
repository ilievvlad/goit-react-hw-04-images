import styled from 'styled-components';

export const Btn = styled.button`
    display: inline-block;
	 padding: 8px 16px;
    border-radius: 2px;
    background-color: var(--accent);
    transition: all var(--anim);
	 color: #fff;
    border: 0;
    margin: 25px auto;
    font-size: 18px;
    line-height: 24px;
    font-style: normal;
    font-weight: 500;
    min-width: 180px;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
	&:hover {
		background-color: #303f9f;
	}
`;