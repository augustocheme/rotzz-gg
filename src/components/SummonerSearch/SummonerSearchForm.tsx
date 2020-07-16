import React from 'react';
import styled from 'styled-components';
import RealmSelector from './RealmSelect';
import Router from 'next/router';
import axios from 'axios';
import Cookies from 'universal-cookie';

const SummonerSearchInput = styled.input`
  width: 800px;
  height: 55px;
  border-radius: 8px;
  border: none;
  font-family: 'Montserrat';
  font-size: 24px;
  font-weight: 600;
  color: #3e3939;
  padding: 0 20px 0 140px;
  &:focus {
    outline: none;
  }
`;

const SubmitButton = styled.input`
  position: absolute;
  right: 0;
  bottom: 0;
  top: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  border: none;
  padding: 0 20px;
  text-transform: uppercase;
  color: #fff;
  background: #02a7ff;
  font-weight: 700;
`;

export default function SummonerSearchForm() {
  const [summonerName, setSummonerName] = React.useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();

    const { data } = await axios({
      method: 'post',
      url: `/api/summoner`,
      data: {
        summoner: summonerName,
      },
    });

    console.log(data);

    if (data.id) {
      const cookies = new Cookies();
      cookies.set('accountId', data.accountId);
      // localStorage.setItem('accountId', data.accountId);
      Router.push(`/${data.name}`);
    }
  }

  return (
    <form style={{ position: 'relative' }} onSubmit={handleFormSubmit}>
      <RealmSelector />
      <SummonerSearchInput
        type="text"
        placeholder="Summoner name"
        id="summoner-name"
        onChange={event => setSummonerName(event.target.value)}
        value={summonerName}
      />
      <SubmitButton type="submit" value="search" />
    </form>
  );
}
