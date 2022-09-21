import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
  color: ${EThemeColor.fontColor};
  height: 100%;
  font-size: 2.5em;
`;

const StyledNotFound = {
  Wrapper,
};

export default StyledNotFound;
