import styled from 'styled-components';
import EThemeColor from '../assets/styles/colors/theme';

const Container = styled.div`
  max-width: 1150px;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TitlePostList = styled.div`
  width: 330px;
  margin: 30px auto;
  font-size: 3em;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: ${EThemeColor.fontColor};
  border-bottom: 3px solid ${EThemeColor.accentColor};
`;

const MessagePostsNotFound = styled.div`
  font-size: 2em;
  color: ${EThemeColor.fontColor};
  text-align: center;
`;

const StyledPages = {
  Container,
  Wrapper,
  TitlePostList,
  MessagePostsNotFound,
};

export default StyledPages;
