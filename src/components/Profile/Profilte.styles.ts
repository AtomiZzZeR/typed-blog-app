import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  margin: 0px auto;
  margin: 60px 0px 0px 0px;
`;

const UserId = styled.div`
  font-size: 1.3em;
  color: ${EThemeColor.fontColor};
`;

const Input = styled.input``;

const Button = styled.button`
  font-size: 1.3em;
`;

const StyledProfile = {
  Wrapper,
  UserId,
  Input,
  Button,
};

export default StyledProfile;
