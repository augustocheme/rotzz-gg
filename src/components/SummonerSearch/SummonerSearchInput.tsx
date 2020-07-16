import React from 'react';
import styled from 'styled-components';

const SummonerSearchInput = styled.input`
  width: 800px;
  height: 55px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 600;
  color: #3e3939;
  padding: 0 20px 0 115px;
  &:focus {
    outline: none;
  }
`;

export default SummonerSearchInput;
