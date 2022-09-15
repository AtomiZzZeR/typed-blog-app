import styled from 'styled-components';
import EThemeColor from '../../assets/styles/colors/theme';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 20px;
  font-weight: bold;
  color: ${EThemeColor.fontColor};
  border: 2px solid ${EThemeColor.accentColor};
  border-radius: 30px;
`;

// css in styled components
const Title = styled.div`
  font-size: 1.8em;
  text-align: center;
`;

const Content = styled.div`
  font-size: 1.3em;
`;

const ButtonEdit = styled.button`
  position: absolute;
  top: 13px;
  right: 75px;
  width: 50px;
  height: 50px;
  border-radius: 10px 10px 10px 10px;
  background-color: ${EThemeColor.primaryColor};
  border: 3px solid ${EThemeColor.accentColor};
`;

const FormEditPostData = styled.form`
  display: flex;
  flex-direction: column;
`;

const ButtonDelete = styled.button`
  position: absolute;
  top: 13px;
  right: 13px;
  width: 50px;
  height: 50px;
  border-radius: 10px 20px 10px 10px;
  background-color: ${EThemeColor.primaryColor};
  border: 3px solid ${EThemeColor.accentColor};
`;

const StyledPostItem = {
  Wrapper,
  Title,
  Content,
  ButtonEdit,
  FormEditPostData,
  ButtonDelete,
};

export default StyledPostItem;
