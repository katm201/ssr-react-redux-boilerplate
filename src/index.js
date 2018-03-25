const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');

const Home = require('./client/components/Home').default;

const app =  express();

app.get('/', (request, response) => {
  const content = renderToString(<Home />);

  response.send(content);
});

app.listen(80, () => {
  console.log('Listening on port 80');
});
