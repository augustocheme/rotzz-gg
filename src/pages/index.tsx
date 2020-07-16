import React from 'react';
import styled from 'styled-components';
import SummonerSearch from '../components/SummonerSearch/SummonerSearch';
import SummonerSearchForm from '../components/SummonerSearch/SummonerSearchForm';

const Logo = styled.h1`
  color: #fff;
  margin: 0;
  font-family: 'Do Hyeon';
  font-size: 50px;
  letter-spacing: 2px;
  span {
    color: #06a6ff;
  }
`;

const Header = styled.nav`
  width: 100%;
  background-color: #0c0a26;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 30px;
`;

export default function Index() {
  return (
    <>
      <Header>
        <Logo>
          Rotzz.<span>gg</span>
        </Logo>
      </Header>
      <SummonerSearch />
    </>
  );
}
