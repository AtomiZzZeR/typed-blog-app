import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 2px solid ${EThemeColor.accentColor};
	margin: 10px 0px 0px 20px;
	padding: 10px;
	border-radius: 100px;
`;

const StyledFormAddComment = {
  Form,
};

export default StyledFormAddComment;
