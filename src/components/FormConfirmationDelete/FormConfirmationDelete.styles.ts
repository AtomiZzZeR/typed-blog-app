import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 400px;
  height: 300px;
  border: 4px solid ${EThemeColor.accentColor};
  background-color: ${EThemeColor.primaryColor};
  border-radius: 40px;
  box-shadow: 0px 0px 200px 5px #222;
`;

const Message = styled.div`
  font-weight: bold;
  font-size: 1.5em;
  color: #fff;
`;

const BoxForButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`;

const Button = styled.button`
  font-weight: bold;
  font-size: 1.5em;
  padding: 5px;
`;

const StyledFormConfirmationDelete = {
  Wrapper,
  Message,
  BoxForButtons,
  Button,
};

export default StyledFormConfirmationDelete;
