export default async (req, res) => {
  if (req.method === 'POST') {
    const { summoner } = req.body;

    const response = await fetch(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summoner}?api_key=RGAPI-010fd2a0-a370-44eb-acc2-93947b3a2516`
    );

    const data = await response.json();

    return res.json(data);
    // res.redirect(307, `/${summoner}`);
  } else {
    return res.json({ message: 'ok' });
  }
};
