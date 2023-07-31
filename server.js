import express from 'express';

const port = 5000;
const paths = {
  ideas: 'ideas',
};
const app = express();

// Establishing basic routes

app.get('/', (req, res) => {
  res.send('RandomIdeas API');
});

app.listen(port, () => {
  console.log(`The project is working on port: http://localhost:${port}/`);
  console.log(`Find the ideas on: http://localhost:${port}/${paths.ideas}`);
  console.log(
    `Find a specific ID, f.e.: http://localhost:${port}/${paths.ideas}/1`
  );
});

// Advanced routes

import ideasRouter from './routes/ideas.js';
app.use(`/${paths.ideas}`, ideasRouter);
