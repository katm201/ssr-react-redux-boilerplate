/*
 *
 * RENDERING LOGIC FOR SERVER
 *
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import template from './html-template';
import Routes from '../client/Routes';

export default function (request, store) {
  const router = (
    <Provider store={store}>
      <StaticRouter location={request.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );
  const content = renderToString(router);
  return template(content);
}
