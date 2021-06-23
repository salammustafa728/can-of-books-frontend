import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
// import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'


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
                                                src="https://www.verywellmind.com/thmb/L_4A6KQOvCiR3D2ZyL62XvZaBg4=/2067x2067/smart/filters:no_upscale()/numerous-stacks-of-books-693407302-5b350a7346e0fb0037b3c200.jpg"
                                                alt="First slide"
                                            />
                                            <Carousel.Caption>
                                                {/* <Card style={{ width: '18rem' }}>
                                                    <Card.Img variant="top" src="holder.js/100px180" />
                                                    <Card.Body> */}
                                                       <h1>{value.name}</h1> 
                                                       
                                                        <p>{value.description}</p>
                                                         <p>{value.status}</p>
                                                      
                                                         <p>{value.status}</p>
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
