import express from 'express';

const port = 5000;
const paths = {
  ideas: 'ideas',
};
const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

app.get('/', (req, res) => {
  res.send('RandomIdeas API');
});

app.get(`/${paths.ideas}`, (req, res) => {
  res.json({
    success: true,
    data: ideas,
  });
});

app.get(`/${paths.ideas}/:id`, (req, res) => {
  const ideaID = Number(req.params.id);
  const idea = ideas.find((idea) => idea.id === ideaID);

  if (!idea) {
    res.status(404).json({
      success: false,
      error: `Idea with ID ${ideaID} was not found.`,
    });
  }

  res.json({
    success: true,
    data: idea,
  });
});

app.listen(port, () => {
  console.log(`The project is working on port: http://localhost:${port}/`);
  console.log(`Find the ideas on: http://localhost:${port}/${paths.ideas}`);
  console.log(
    `Find a specific ID, f.e.: http://localhost:${port}/${paths.ideas}/1`
  );
});
