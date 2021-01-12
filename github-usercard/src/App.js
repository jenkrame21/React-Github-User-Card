import React from 'react';
import axios from 'axios';
import MyFollowers from './components/MyFollowers';
import './styles/style.css';

class App extends React.Component {

  state = {
    myInfo: []
  }

  // Mounts component and grabs my API data
  componentDidMount() {
    console.log("App: Component Mounted");
    axios.get("https://api.github.com/users/jenkrame21")
      .then((res) => {
        console.log("App: CDM Success: ", res.data);
        this.setState({
          myInfo: res.data
        })
      })
      .catch((err) => {
        console.log("App: CDM Failure: ", err.message);
      });
  }

  render() {
    console.log("App: Component Rendered");
    return(
      <div className="App">
        <header>
          <h1>{this.state.myInfo.name}'s GitHub Profile</h1>
        </header>
        <div className="profile">
          <img src={this.state.myInfo.avatar_url} alt="Jennifer Kramer"/>
          <h4>Name: {this.state.myInfo.name}</h4>
          <h4>Username: {this.state.myInfo.login}</h4>
          <h4>Bio: {this.state.myInfo.bio}</h4>
          <h4>Location: {this.state.myInfo.location}</h4>
          <h4>Number of Followers: {this.state.myInfo.followers}</h4>
        </div>
        <MyFollowers />
      </div>
    )
  }
}

export default App;