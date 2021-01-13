import React from 'react';
import axios from 'axios';
import '../styles/style.css';

class MyFollowers extends React.Component {

    state = {
        followers: [{}]
    }

    componentDidMount() {
        console.log("MyFollowers: Component Did Mount");
        axios.get("https://api.github.com/users/jenkrame21/followers")
            .then((res) => {
                console.log("My Followers: CDM Success!", res.data)
                this.setState({
                    followers: res.data
                })
            })
            .catch((err) => {
                console.log("My Followers: CDM Failure", err.message);
            })
    }

    render() {
        console.log("MyFollowers: Component Renders")
        return(
            <div className="myFollowers">
                <header>
                    <h1>Jennifer Kramer's Github Followers</h1>
                </header>
                <div>
                    {
                        this.state.followers.map(follower => (
                            <div className="profile-container">
                                <img src={follower.avatar_url} alt="follower images" key={follower}/>
                                <div className="profile-info">
                                    <h4>Username: {follower.login}</h4>
                                    <h4>Repos: {follower.repos_url}</h4>
                                    <h4>GitHub Profile URL: {follower.url}</h4>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default MyFollowers;