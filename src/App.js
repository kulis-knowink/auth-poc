import logo from './logo.svg';
import './App.css';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import LogoutButton from './logout';
import SendIt from './send-it';
import UpdateIt from './update-it';
import axios from 'axios';

function App() {

  const { isLoading, error, getAccessTokenSilently } = useAuth0();

  axios.interceptors.request.use(async config => {

    const token = await getAccessTokenSilently();

    return {
      ...config,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }

    // return config;
  }, error => {
    return Promise.reject(error);
  })

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SendIt />
      <UpdateIt />
      <LogoutButton />
    </div>
  );
}

export default withAuthenticationRequired(App, { onRedirecting: () => <div>Loading</div> });
