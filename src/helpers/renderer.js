import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import template from './html-template';
import Routes from '../client/Routes';

export default function (request) {
  const router = (
    <StaticRouter location={request.path} context={{}}>
      <Routes />
    </StaticRouter>
  );
  const content = renderToString(router);
  return template(content);
}
