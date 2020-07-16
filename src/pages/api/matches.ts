export default async (req, res) => {
  const accountId = req.query.accountId;

  const response = await fetch(
    `https://br1.api.riotgames.com/lol/match/v4/matchlists/by-account/${accountId}?endIndex=20&api_key=RGAPI-010fd2a0-a370-44eb-acc2-93947b3a2516`
  );

  const data = await response.json();

  return res.json(data);
};
