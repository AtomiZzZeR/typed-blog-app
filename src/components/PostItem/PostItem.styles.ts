import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 20px;
  border: 2px solid ${EThemeColor.accentColor};
  font-weight: bold;
  border-radius: 100px;
`;

const StyledPostItem = {
  Wrapper,
};

export default StyledPostItem;
