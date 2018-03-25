import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';

import Home from './client/components/Home';

const app = express();

app.get('/', (request, response) => {
  const content = renderToString(<Home />);

  response.send(content);
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
