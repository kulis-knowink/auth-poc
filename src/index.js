import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios'
import createAuth0Client from '@auth0/auth0-spa-js';



//
// axios.interceptors.request.use(async config => {
//
//   // either with async/await
//   const auth0 = await createAuth0Client({
//     domain: 'ki-apps.us.auth0.com',
//     client_id: 'EyxckU5q2PkttnnvMvOYVgU8xzyrrcWG'
//   });
//
//
//   const token = await auth0.getTokenSilently();
//
//   return {
//     ...config,
//     headers: {
//       ...config.headers,
//       Authorization: `Bearer ${token}`
//     }
//   }
//   // return config;
// }, error => {
//   return Promise.reject(error);
// })


ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain="ki-apps.us.auth0.com"
      clientId="EyxckU5q2PkttnnvMvOYVgU8xzyrrcWG"
      redirectUri={window.location.origin}
      audience="https://localhost:3000"
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
