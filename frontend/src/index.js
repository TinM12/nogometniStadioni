import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import './styles/global.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain='dev-nxxsg5rr4rv0qdjz.us.auth0.com'
      clientId='is24XNG65rIbb8eeF2OijbmJG7cgcaky'
      redirectUri={window.location.origin}
      audience='Moj API'
      scope='openid profile email'
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);

