import React from 'react';
import { SelectOption } from '../components/UI KIT/SelectOption';
import { IOption } from '../components/UI KIT/SelectOption/SelectOption';
import Styled from './Page.styles';

const SelectPage = () => {
  const options: IOption[] = [
    { value: 'Python', content: 'Python' },
    { value: 'JavaScript', content: 'JavaScript' },
    { value: 'Swift', content: 'Swift' },
    { value: 'Fortran', content: 'Fortran' },
    { value: 'C++', content: 'C++' },
    { value: 'TypeScript', content: 'TypeScript' },
    { value: 'SQL', content: 'SQL' },
  ];

  return (
    <Styled.Wrapper>
      <SelectOption options={options} />
    </Styled.Wrapper>
  );
};

export default SelectPage;
