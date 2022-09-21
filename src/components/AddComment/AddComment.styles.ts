import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  min-height: 70px;
  margin: 20px 0px 0px 0px;
  padding: 10px;
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 15px;
`;

const Input = styled.input`
  padding: 2px 8px;
  font-size: 1.1em;
  border-radius: 100px;
`;

const MsgValidate = styled.div`
  margin: 9px 0px 0px 0px;
  text-align: center;
  color: #ff3333;
`;

const BoxForBtns = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px auto 0px;
  width: 150px;
`;

const Btn = styled.button`
  padding: 0px 5px;
  color: ${EThemeColor.fontColor};
  background-color: ${EThemeColor.primaryColor};
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 100px;
`;

const StyledAddComment = {
  Form,
  Input,
  MsgValidate,
  BoxForBtns,
  Btn,
};

export default StyledAddComment;
