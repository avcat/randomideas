import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config();
connectDB();

const port = process.env.PORT || 5000;
const paths = {
  ideas: 'ideas',
};
const app = express();

// Static folder
app.use(express.static(path.join(__dirname, 'public')));
console.info(path.join(__dirname, 'public'));

// Body parser middleware
// On POST request, allows to access request.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  }),
);

// Establishing basic routes
app.get('/', (req, res) => {
  res.send('RandomIdeas API');
});

app.listen(port, () => {
  console.group('\u001b[1;34m > Server Listening');
  console.info(
    `\t * The project is working on port: http://localhost:${port}/`,
  );
  console.info(
    `\t * Find the ideas on: http://localhost:${port}/${paths.ideas}`,
  );
  console.info(
    `\t * Find a specific ID, f.e.: http://localhost:${port}/${paths.ideas}/1`,
  );
  console.info(
    `\t * Add a new idea at http://localhost:${port}/${paths.ideas}. F.e.: {"text": "Some thoughts on unlocking doors", "tag":"Inventions", "username":"BlackWidow"}`,
  );
  console.info(
    `\t * Change text or tag of an idea at http://localhost:${port}/${paths.ideas}/<id>. F.e.: {"text": "Some thoughts on unlocking doors", "tag":"Inventions"}`,
  );
  console.groupEnd();
});

// Advanced routes
import ideasRouter from './routes/ideas.js';
app.use(`/${paths.ideas}`, ideasRouter);
