import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Comment = styled.div`
  padding: 10px;
  color: #fff;
  font-size: 1.1em;
  width: 100%;
  border: 2px dashed ${EThemeColor.accentColor};
  border-radius: 15px;
  margin: 15px 0px 0px 0px;
`;

const StyledCommentItem = {
  Comment,
};

export default StyledCommentItem;
