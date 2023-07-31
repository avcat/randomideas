import express from 'express';
const router = express.Router();

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

router.get('/', (req, res) => {
  res.json({
    success: true,
    data: ideas,
  });
});

router.get('/:id', (req, res) => {
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

export default router;
