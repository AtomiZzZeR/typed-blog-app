import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0px 0px 0px;
  min-height: 70px;
  padding: 15px 15px;
  color: ${EThemeColor.fontColor};
  border: 2px dashed ${EThemeColor.accentColor};
  border-radius: 13px;
`;

const ButtonDelete = styled.button`
  width: 40px;
  height: 40px;
  font-size: 1.5em;
  color: ${EThemeColor.accentColor};
  background-color: ${EThemeColor.primaryColor};
  border: 2px dashed ${EThemeColor.accentColor};
  border-radius: 10px;

  &:hover {
    transform: scale(1.1);
  }

  &:active {
    transform: scale(1.15);
  }
`;

const StyledCommentItem = {
  Wrapper,
  ButtonDelete,
};

export default StyledCommentItem;
