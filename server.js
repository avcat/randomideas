import express from 'express';

const port = 5000;
const paths = {
  ideas: 'ideas',
};
const app = express();

// Body parser middleware
// On POST request, allows to access request.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);

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
  console.log(
    `Add a new idea at http://localhost:${port}/${paths.ideas}. F.e.: {"text": "Some thoughts on unlocking doors", "tag":"Inventions", "username":"BlackWidow"}`
  );
  console.log(
    `Change text or tag of an idea at http://localhost:${port}/${paths.ideas}/<id>. F.e.: {"text": "Some thoughts on unlocking doors", "tag":"Inventions"}`
  );
});

// Advanced routes
import ideasRouter from './routes/ideas.js';
app.use(`/${paths.ideas}`, ideasRouter);
