import styled, { css } from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  position: relative;
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

const ButtonStyles = css`
  position: absolute;
  top: 13px;
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

const ButtonEdit = styled.button`
  right: 63px;
  ${ButtonStyles};
`;

const ButtonDelete = styled.button`
  right: 13px;
  ${ButtonStyles};
`;

const StyledCommentItem = {
  Wrapper,
  ButtonEdit,
  ButtonDelete,
};

export default StyledCommentItem;
