import React, { FC, useState } from 'react';
import Styled from './SelectOption.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

export interface IOption {
  value: string;
  content: string;
}

interface ISelectOptionsProps {
  options: IOption[];
}

const SelectOption: FC<ISelectOptionsProps> = ({ options }) => {
  const [value, setValue] = useState<string>('');

  const [isBody, setIsBody] = useState<boolean>(false);

  const [currentOptions, setCurrentOptions] = useState<IOption[]>(options);

  const handleOpenBodyFocus = () => {
    setIsBody(true);
  };

  const handleSecectClick = (value: string, content: string) => {
    setValue(content);

    setCurrentOptions(options.filter((option) => option.value !== value));

    setIsBody(false);
  };

  const handleCloseBodyBlur = () => {
    setIsBody(false);
  };

  return (
    <Styled.Wrapper>
      <Styled.BoxInput>
        <Styled.Input value={value} readOnly onFocus={handleOpenBodyFocus} />
        <Styled.InputIcon>
          <FontAwesomeIcon icon={faCaretDown} />
        </Styled.InputIcon>
      </Styled.BoxInput>

      {isBody ? (
        <Styled.BodySelect>
          <Styled.Select multiple>
            {currentOptions.map(({ value, content }) => (
              <Styled.Option
                value={value}
                key={value}
                onClick={() => handleSecectClick(value, content)}
              >
                {content}
              </Styled.Option>
            ))}
          </Styled.Select>
        </Styled.BodySelect>
      ) : null}
			<div style={{color: 'red'}}>TEST MSG</div>
    </Styled.Wrapper>
  );
};

export default SelectOption;
