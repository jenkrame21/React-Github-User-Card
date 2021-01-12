import React from 'react';

class FollowerCard extends React.Component {
    renders() {
        return(
            <div className="myFollowers-data">
                {
                    this.state.followers.map(follower => (
                        <div>
                            <img src={follower.avatar_url} alt="follower images"/>
                            <h4>Name: {follower.name}</h4>
                            <h4>Username: {follower.login}</h4>
                            <h4>Repos: {follower.repos_url}</h4>
                            <h4>GitHub Profile URL: {follower.url}</h4>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default FollowerCard;