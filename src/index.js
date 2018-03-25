import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import template from './html-template';
import Home from './client/components/Home';

const app = express();

app.use(express.static('public'));

app.get('/', (request, response) => {
  const content = renderToString(<Home />);
  const html = template(content);
  response.send(html);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
