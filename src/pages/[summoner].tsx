import useSWR from 'swr';
import React from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';
import Link from 'next/link';

const SummonerPage = () => {
  const { data: matchHistory, error } = useSWR('/api/matches', async url => {
    const cookies = new Cookies();
    const response = await axios.get('/api/matches', {
      params: {
        accountId: cookies.get('accountId'),
      },
    });
    return response.data;
  });

  // const cookies = new Cookies();
  // const accountId = cookies.get('accountId');

  // const {
  //   data: matchHistory,
  //   error,
  // } = useSWR(
  //   `https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=20&api_key=RGAPI-010fd2a0-a370-44eb-acc2-93947b3a2516`,
  //   url => fetch(url).then(response => response.json)
  // );

  if (!matchHistory) {
    return <p>loading</p>;
  }

  // console.log(matchHistory);

  return (
    <>
      <ul>
        {matchHistory.matches.map(match => {
          return <li key={match.timestamp}>{match.gameId}</li>;
        })}
      </ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/page2">
        <a>Page2</a>
      </Link>
    </>
  );
};

export default SummonerPage;
