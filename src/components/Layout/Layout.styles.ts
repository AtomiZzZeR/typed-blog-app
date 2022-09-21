import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  position: relative;
`;

const Container = styled.div`
  max-width: 1150px;
  margin: 0px auto;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  padding: 0px 30px;
  background-color: ${EThemeColor.accentColor};
  border-radius: 100px;
`;

const Link = styled.div``;

const TextLink = styled.span`
  color: ${EThemeColor.primaryColor};
  font-size: 2em;
  padding: 7px 10px;
  border-radius: 100px;
  transition: 0.4s;

  &:hover {
    color: ${EThemeColor.accentColor};
    background-color: ${EThemeColor.primaryColor};
  }
`;

const TextAddPost = styled(TextLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  border: 5px solid ${EThemeColor.primaryColor};
`;

const GlobalWindow = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLayout = {
  Wrapper,
  Container,
  Header,
  Link,
  TextLink,
  TextAddPost,
  GlobalWindow,
};

export default StyledLayout;
