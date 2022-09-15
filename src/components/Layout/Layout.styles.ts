import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

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

const StyledLayout = {
  Container,
  Header,
  Link,
  TextLink,
};

export default StyledLayout;
