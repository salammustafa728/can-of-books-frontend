import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";


export class Profile extends Component {
    constructor(props){
        super(props);
        this.state={
            user:this.props.auth0.user.name,
            email:this.props.auth0.user.email,
            userPic:this.props.auth0.user.picture,

        }
    }
    render() {
        return (
            <div>
                <h2>{this.state.user}</h2>
                <p>{this.state.email}</p>
                <img src={this.state.userPic} alt={this.state.user}/>
            </div>
        )
    }
}

export default withAuth0(Profile);
