import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Container = styled.div`
  max-width: 1150px;
  margin: 0px auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 1150px;
  border-radius: 10px;
`;

const StyledPostList = {
  Container,
  Wrapper,
};

export default StyledPostList;
