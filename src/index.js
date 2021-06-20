import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0Provider
    domain="dev-r09jq7-5.eu.auth0.com"
    clientId="HqLYB7UdsDu4tCVXSoTrnDiy2AE4c7WY"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);
