import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bookData: [],
            booksStatus: false
        }
    }
    componentDidMount = async () => {
        await axios.get(`${process.env.REACT_APP_SERVER}/books?email=${this.props.auth0.user.email}`).then(response => {
            this.setState({
                bookData: response.data,
                booksStatus: true
            })
        }).catch(
            error => {
                alert(error.message)
            }
        );
    }

    render() {
        return (
            <div>
                {this.state.booksStatus > 0 &&
                    <>
                        {this.state.bookData[0].books.map(value => {
                            return (
                                <>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                                className="d-block w-100"
                                                src="holder.js/800x400?text=First slide&bg=373940"
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="holder.js/100px180" />
                                                    <Card.Body>
                                                        <Card.Title>{value.name}</Card.Title>
                                                        <Card.Text>
                                                        <p>{value.description}</p>
                                                         <p>{value.status}</p>
                                                        </Card.Text>
                                                        <Card.Text>
                                                         <p>{value.status}</p>
                                                        </Card.Text>
                                                        <Button variant="primary">Go somewhere</Button>
                                                    </Card.Body>
                                                </Card>
                                                
                                               
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </>
                            )
                        })}

                    </>

                }

            </div>
        )
    }
}

export default withAuth0(BestBooks)
