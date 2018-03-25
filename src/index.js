import express from 'express';

import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (request, response) => {
  response.send(renderer(request));
});

app.listen(8080, () => {
  console.log('Listening on port 8080');
});
