export default async (req, res) => {
  const response = await fetch(
    'https://br1.api.riotgames.com/lol/match/v4/timelines/by-match/1998420444?api_key=RGAPI-010fd2a0-a370-44eb-acc2-93947b3a2516'
  );
  const data = await response.json();
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  return res.json(data);
};
