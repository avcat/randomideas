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

router.post('/', (req, res) => {
  const newIdea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(newIdea);

  res.json({
    success: true,
    data: newIdea,
  });
});

router.put('/:id', (req, res) => {
  const ideaID = Number(req.params.id);
  const idea = ideas.find((idea) => idea.id === ideaID);

  if (!idea) {
    res.status(404).json({
      success: false,
      error: `Idea with ID ${ideaID} was not found.`,
    });
  }

  idea.text = req.body.text || idea.text;
  idea.tag = req.body.tag || idea.tag;

  res.json({
    success: true,
    data: idea,
  });
});

router.delete('/:id', (req, res) => {
  const ideaID = Number(req.params.id);
  const ideaIndex = ideas.findIndex((idea) => idea.id === ideaID);

  if (ideaIndex === -1) {
    res.status(404).json({
      success: false,
      error: `Idea with ID ${ideaID} was not found.`,
    });
  }

  ideas.splice(ideaIndex, 1);

  res.json({
    success: true,
    data: {},
  });
});

export default router;
