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
  margin: 10px 0px 0px 0px;
  padding: 0px 30px;
  background-color: ${EThemeColor.accentColor};
  border-radius: 100px;
`;

const Link = styled.div``;

const TextLink = styled.span`
  color: ${EThemeColor.primaryColor};
  font-weight: bold;
  font-size: 2em;
  padding: 7px 14px;
  border-radius: 100px;
  transition: 0.4s;

  &:hover {
    color: ${EThemeColor.accentColor};
    background-color: ${EThemeColor.primaryColor};
  }
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
  GlobalWindow,
};

export default StyledLayout;
