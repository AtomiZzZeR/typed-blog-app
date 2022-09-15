import { createGlobalStyle } from 'styled-components';
import EThemeColor from '../colors/theme';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body,
	#root {
		height: 100%;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
		background-color: ${EThemeColor.primaryColor}
	}

	a {
		text-decoration: none;
	}

	input {
		border: none;

		&:focus {
			outline: none;
		}
	}

	button {
		border: 0;
		cursor: pointer;
	}
	
`;

export default GlobalStyles;
