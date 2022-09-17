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
		font-weight: bold;
		font-family: Arial, Helvetica, sans-serif;
		background-color: ${EThemeColor.primaryColor}
	}

	a {
		text-decoration: none;
	}

	input {
		font-weight: bold;
		border: none;

		&:focus {
			outline: none;
		}
	}

	button {
		font-weight: bold;
		border: none;
		cursor: pointer;
	}
	
`;

export default GlobalStyles;
