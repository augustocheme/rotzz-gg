import React from 'react';
import styled from 'styled-components';
import SummonerSearchForm from './SummonerSearchForm';

const SummonerSearchContainer = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
  background-image: url(/background-image.jpg);
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function SummonerSearch() {
  return (
    <SummonerSearchContainer>
      <h1
        style={{
          margin: 0,
          color: `#fff`,
          fontFamily: 'Montserrat',
          fontSize: '48px',
          marginBottom: `35px`,
          marginTop: `-100px`,
        }}
      >
        Take your gameplay to the next level
      </h1>
      <h2
        style={{
          margin: 0,
          color: `#fff`,
          fontFamily: 'Montserrat',
          fontSize: `24px`,
          fontWeight: 500,
          marginBottom: `35px`,
        }}
      >
        <b style={{ color: `#FF9B00`, fontWeight: 700 }}>Build like a pro.</b>{' '}
        See how the pros are playing the game
      </h2>
      <SummonerSearchForm />
    </SummonerSearchContainer>
  );
}
