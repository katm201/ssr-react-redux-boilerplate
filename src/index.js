/*
 *
 * POINT OF ENTRY FOR SERVER
 *
 */

import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { json } from 'body-parser'

import createStore from './helpers/store';
import renderer from './helpers/renderer';

dotenv.config();

const app = express();

app.use(express.static('public'));
app.use(json());
app.use(cors());

app.get('*', (request, response) => {
  const store = createStore();

  // initialize store with state
  response.send(renderer(request, store));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
