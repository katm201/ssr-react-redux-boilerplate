/*
 *
 * POINT OF ENTRY FOR SERVER
 *
 */

import express from 'express';
import cors from 'cors';
import { json } from 'body-parser'

import createStore from './helpers/store';
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));
app.use(json());
app.use(cors());

app.get('*', (request, response) => {
  const store = createStore();

  // initialize store with state
  response.send(renderer(request, store));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
