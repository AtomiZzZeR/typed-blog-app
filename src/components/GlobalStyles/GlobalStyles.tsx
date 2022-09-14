import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html,
	body {
		height: 100%;
	}

	#root {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	body {
		font-family: Arial, Helvetica, sans-serif;
	}
`;

export default GlobalStyles;
