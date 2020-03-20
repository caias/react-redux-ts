import React, { useState } from 'react';
import styled from 'styled-components';

const SelectWrap = styled.div`
  text-align: right;
  margin-bottom: 1.25rem;
`;

const Select = styled.select`
  width: 150px;
  height: 38px;
  padding: .375rem .75rem;
  color: #495057;
  border: 1px solid #ced4da;
  border-radius: .25rem;
  background-color: #fff;
  font-size: 1rem;
`;

const SelectBox = (props) => {
  const { onChangeHandler } = props;
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onChangeHandler(value);
  }
  
  return(
    <SelectWrap>
      <Select value={value} onChange={onChange}>
        <option value="subject">제목순</option>
        <option value="newest">최신순</option>
      </Select>
    </SelectWrap>
  );
};

export default SelectBox;