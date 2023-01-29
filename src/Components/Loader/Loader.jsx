import { Oval } from 'react-loader-spinner';
import { Inner } from './Loader.styled';

export const Loader = () => {
	return (
		<Inner>
			<Oval
				ariaLabel="loading-indicator"
				height={100}
				width={100}
				strokeWidth={5}
				strokeWidthSecondary={1}
				color="blue"
				secondaryColor="white"
			/>
		</Inner>
	);
}