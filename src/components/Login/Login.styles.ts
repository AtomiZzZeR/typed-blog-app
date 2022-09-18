import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 550px;
  height: 330px;
  border: 8px solid ${EThemeColor.accentColor};
  border-radius: 75px;
`;

const BoxInputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 130px;
  margin: 60px 0px 37px 0px;
`;

const Input = styled.input`
  font-size: 2em;
  padding: 5px 15px;
  border-radius: 100px;
`;

const Button = styled.button`
  padding: 5px 30px;
  font-size: 2em;
  color: ${EThemeColor.fontColor};
  background-color: ${EThemeColor.primaryColor};
  border: 4px solid ${EThemeColor.accentColor};
  border-radius: 100px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.05);
    background-color: ${EThemeColor.accentColor};
    box-shadow: 0px 0px 30px 3px ${EThemeColor.accentColor};
  }
`;

const StyledLogin = {
  Wrapper,
  BoxInputs,
  Input,
  Button,
};

export default StyledLogin;
