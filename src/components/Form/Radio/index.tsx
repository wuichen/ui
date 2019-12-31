/*
 * @license
 * Copyright Ahmed Elywa. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */

import React from 'react';
import { Status } from '../../types';
import RadioStyle from './style';

const Radio: React.FC<RadioProps> = props => {
  const [options, setOptions] = React.useState<Option[]>(props.options);

  const onClickHandler = (value: number | string) => {
    const updateOptions = [...options];
    for (const option of updateOptions) {
      option.checked = option.value === value;
    }
    setOptions(updateOptions);
    props.onChange(value);
  };

  return options.map(option => (
    <RadioStyle status={option.status} key={option.value} className={props.className}>
      <input
        type="radio"
        checked={option.checked}
        name={props.name}
        disabled={option.disabled || props.disabled}
        onClick={() => onClickHandler(option.value)}
        className="native-input visually-hidden"
      />
      <span className="outer-circle"/>
      <span className="inner-circle"/>
      <span className="text">{option.label}</span>
    </RadioStyle>
  ));
};

export interface Option {
  value: number | string;
  label: string;
  checked?: boolean;
  disabled?: boolean;
  status?: Status;
}

interface RadioProps {
  name: string;
  onChange: (value: number | string) => void;
  options: Option[];
  className?: string;
  disabled?: boolean;
}

export default Radio;
