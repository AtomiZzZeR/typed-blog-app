import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;
  width: 400px;
  height: 210px;
  border: 4px solid ${EThemeColor.accentColor};
  background-color: ${EThemeColor.primaryColor};
  border-radius: 40px;
  box-shadow: 0px 0px 200px 5px #222;
`;

const Message = styled.div`
  font-size: 1.5em;
  color: #fff;
  text-align: center;
`;

const BoxForButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 265px;
`;

const Button = styled.button`
  color: #fff;
  font-size: 1.5em;
  padding: 5px 10px;
  background-color: ${EThemeColor.primaryColor};
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 100px;
  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
    background-color: ${EThemeColor.accentColor};
    box-shadow: 0px 0px 30px 1px ${EThemeColor.accentColor};
  }

  &:active {
    transform: scale(1.2);
  }
`;

const StyledConfirmDelete = {
  Wrapper,
  Message,
  BoxForButtons,
  Button,
};

export default StyledConfirmDelete;
