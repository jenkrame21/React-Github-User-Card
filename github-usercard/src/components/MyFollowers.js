import React from 'react';
import axios from 'axios';
import '../styles/style.css';
import FollowerCard from ''

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
                <h1>My Followers</h1>
                <FollowerCard />
            </div>
        )
    }
}

export default MyFollowers;