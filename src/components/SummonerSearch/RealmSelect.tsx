import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  width: 120px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 0px 10px;
  background: #e8e8e8;
  border: none;
  &:before {
    content: '';
    position: absolute;
    right: 10px;
    top: 25px;
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 10px solid #3e3939;
    z-index: 2;
  }
`;

const StyledSelect = styled.select`
  width: 100%;
  height: 100%;
  bottom: 0;
  padding: 0px 10px;
  background: #e8e8e8;
  border: none;
  font-size: 24px;
  font-weight: 600;
  color: #3e3939;
  appearance: none;
  position: relative;
`;

export default function RealmSelector() {
  return (
    <StyledContainer>
      <StyledSelect name="" id="">
        <option value="BR">BR</option>
        <option value="NA">NA</option>
        <option value="EUW">EUW</option>
      </StyledSelect>
    </StyledContainer>
  );
}
