import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

interface IInput {
  border: string;
}

interface IMessageValidate {
  colorMessage: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 310px;
  margin: 140px 0px 0px 0px;
  padding: 45px 0px 0px 0px;
  border: 4px dashed ${EThemeColor.accentColor};
  border-radius: 50px;
`;

const Input = styled.input<IInput>`
  margin: 0px 0px 27px 0px;
  padding: 5px 15px;
  font-size: 1.8em;
  color: ${EThemeColor.primaryColor};
  border: ${(props) => props.border};
  border-radius: 100px;
`;

const MessageValidate = styled.div<IMessageValidate>`
  height: 10px;
  margin: -5px 0px 30px 0px;
  font-size: 1.3em;
  color: ${(props) => props.colorMessage};
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 1.8em;
  color: #fff;
  background-color: ${EThemeColor.primaryColor};
  border: 4px solid ${EThemeColor.accentColor};
  border-radius: 100px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px 3px ${EThemeColor.accentColor};
    background-color: ${EThemeColor.accentColor};
  }

  &:active {
    transform: scale(1.1);
  }
`;

const StyledAddPost = {
  Form,
  Input,
  MessageValidate,
  Button,
};

export default StyledAddPost;
