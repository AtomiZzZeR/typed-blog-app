import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 0px auto;
  padding: 20px;
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 100px;
`;

const Input = styled.input``;

const Button = styled.button``;

const StyledEditPost = {
  Form,
  Input,
  Button,
};

export default StyledEditPost;
