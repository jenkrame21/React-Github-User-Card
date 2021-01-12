import React from 'react';
import MyFollowers from './components/MyFollowers';
import './styles/style.css';
import MyGithubProfile from './components/MyGithubProfile';

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <MyGithubProfile />
        <MyFollowers />
      </div>
    )
  }
}

export default App;