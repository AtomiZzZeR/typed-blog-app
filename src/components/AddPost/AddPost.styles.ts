import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

interface IInput {
  border: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 290px;
  margin: 140px 0px 0px 0px;
  padding: 30px 0px 0px 0px;
  font-weight: bold;
  border: 4px dashed ${EThemeColor.accentColor};
  border-radius: 50px;
`;

const Input = styled.input<IInput>`
  margin: 0px 0px 27px 0px;
  padding: 5px 15px;
  font-weight: bold;
  font-size: 1.8em;
  color: ${EThemeColor.primaryColor};
  border-radius: 100px;
  border: ${(props) => props.border};
`;

const ResultMessage = styled.div`
  height: 10px;
  font-size: 1.3em;
  margin: -5px 0px 30px 0px;
`;

const MessagePostAdded = styled(ResultMessage)`
  color: #47a76a;
`;

const MessageError = styled(ResultMessage)`
  color: #ff3333;
`;

const Button = styled.button`
  color: ${EThemeColor.primaryColor};
  background-color: ${EThemeColor.accentColor};
  padding: 5px 10px;
  font-weight: bold;
  font-size: 1.6em;
  border-radius: 100px;
`;

const StyledAddPost = {
  Form,
  Input,
  ResultMessage,
  MessagePostAdded,
  MessageError,
  Button,
};

export default StyledAddPost;
