import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 170px 0px 0px 0px;
`;

const BoxInput = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 1.6em;
  color: #222;
  outline: 3px solid #777;
  border: none;
  border-radius: 100px;

  &:focus {
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 5px #777;
  }
`;

const InputIcon = styled.div`
  margin-left: -33px;
  font-size: 1.9em;
`;

const BodySelect = styled.div`
  margin: 2px 0px 0px 0px;
  padding: 10px 10px 10px 10px;
  background-color: #fff;
  border: 3px solid #777;
  border-radius: 30px;
`;

const Select = styled.select`
  width: 100%;
  border: none;

  &:focus {
    outline: none;
  }
`;

const Option = styled.option`
  padding: 5px 5px;
  font-size: 2em;
  color: #222;
`;

const StyledSelectOption = {
  Wrapper,
  BoxInput,
  Input,
  InputIcon,
  BodySelect,
  Select,
  Option,
};

export default StyledSelectOption;
