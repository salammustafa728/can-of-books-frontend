import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';

export class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.auth0.user.name,
      email: this.props.auth0.user.email,
      userPic: this.props.auth0.user.picture,
    };
  }
  render() {
    return (
      <div>
        <br></br>
        <br></br>
        <Card style={{ width: '18rem' }}>
          <Card.Img
            variant="top"
            src={this.state.userPic}
            alt={this.state.user}
          />
          <Card.Body>
            <Card.Title>{this.state.user}</Card.Title>
            <Card.Text>{this.state.email}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default withAuth0(Profile);
