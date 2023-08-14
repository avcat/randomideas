import express from 'express';
import Idea from '../models/Idea.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ideas = await Idea.find();
    res.json({
      success: true,
      data: ideas,
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      error: 'Something went wrong.'
    });
    console.error(err);
  }
});

router.get('/:id', async (req, res) => {
  const ideaID = req.params.id; // AutoID is a hash value

  try {
    const idea = await Idea.findById(ideaID);
    res.json({
      success: true,
      data: idea,
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      error: `Something went wrong. Idea with ID ${ideaID} was not found.`
    });
    console.error(err);
  }
});

router.post('/', async (req, res) => {
  const newIdea = new Idea({
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
  });

  try {
    const savedIdea = await newIdea.save();
    res.json({
      success: true,
      data: savedIdea,
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      error: 'Something went wrong',
    });
    console.error(err);
  }  
});

router.put('/:id', async (req, res) => {
  const ideaID = req.params.id;

  try {
    const updatedIdea = await Idea.findByIdAndUpdate(
      ideaID, 
      {
        $set: {
          text: req.body.text || idea.text,
          tag: req.body.tag || idea.tag
        }
      },
      {
        new: true
      }
    );
  
    res.json({
      success: true,
      data: updatedIdea,
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      error: `Idea with ID ${ideaID} was not found.`
    });
    console.error(err);
  }
});

router.delete('/:id', async (req, res) => {
  const ideaID = req.params.id;

  try {
    await Idea.findByIdAndDelete(ideaID);

    res.json({
      success: true,
      data: {},
    });
  } catch(err) {
    res.status(500).json({
      success: false,
      error: `Idea with ID ${ideaID} was not found.`,
    });
    console.error(err);
  }
});

export default router;
