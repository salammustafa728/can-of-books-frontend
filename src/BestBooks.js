import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateBook from './Component/CreateBooks';
import UpdateBook from './Component/UpdateFormModel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'
import  './BestBooks.css';

export class BestBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksData: [],
            booksStatus: false,
            email: this.props.auth0.user.email,
            serverUrl: process.env.REACT_APP_SERVER,
            bookName: '',
            description: '',
            status: '',
            recievedBookName: '',
            recievedBookDesc: '',
            recievedBookStatus: '',
            showForm: false,
            bookIndex: 0

        }
    }
    //     updateBook = (e,idx) => {
    //         this.setState({ 
    //         bookName:e.target.name.value,
    //         description:e.target.description.value,
    //         status:e.target.status.value, });

    //         console.log('status',this.state.status);
    //         e.preventDefault();
    //         const requestBody = {
    //             name: this.state.bookName,
    //             description: this.state.description,
    //             status: this.state.status,
    //             email: this.state.email
    //         }
    //         console.log(requestBody);
    //         axios.put(`${this.state.serverUrl}/books/${idx}`, requestBody).then(response => {
    //             this.setState({
    //                 booksData: response.data.books
    //             })
    //         }).catch(error => {
    //             alert(error.message)
    //         })
    // }

    updateBook =async (e) => {
        console.log('e',e.target.name.value);
        await this.setState({
            showForm:true,
            recievedBookName: e.target.name.value,
            recievedBookDesc: e.target.desc.value,
            recievedBookStatus: e.target.status.value,
        }) 
        e.preventDefault();
        const reqBody = {
            email: this.state.email,
            name: this.state.recievedBookName,
            description: this.state.recievedBookDesc,
            status: this.state.recievedBookStatus
        }
        
      await axios.put(`${this.state.serverUrl}/books/${this.state.bookIndex}`, reqBody).then(res => {
            this.setState({
                booksData: res.data.books,
                showForm: false
            })
            console.log('res',res)
        })
            .catch(
                error => {
                    // alert(error.mesaage);
                }
            );
    }

    // showUpdateForm = (e,indx) => this.setState({
    //     showUpdateForm: !this.state.showUpdateForm,
    //     bookIndex: indx
    // });

    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/books?email=${this.state.email}`).then(response => {
            this.setState({
                booksData: response.data.books
            })
            console.log('response', response)
        }).catch(
            error => {
                alert(error.message);
            }
        );
    }
    updateName = (e) => {
        this.setState({
            bookName: e,
            description: e,
            status: e
        });

    }
    creteMyBook = (e) => {
        e.preventDefault();
        const requestBody = {
            name: e.target.name.value,
            description: e.target.description.value,
            status: e.target.status.value,
            email: this.state.email
        }
        console.log('name', this.state.bookName);
        axios.post(`${this.state.serverUrl}/books`, requestBody).then(response => {
            this.setState({
                booksData: response.data.books
            })
            console.log('res', this.state.booksData);
        }).catch(error => {
            alert(error.message)
        })

    }

    deleteMyBook = (idx) => {
        console.log('idx', idx);
        // e.preventDefault();
        //http://localhost:3000/books/2?email=salammustafa728@gmail.com
        //http://localhost:3000/books/1?email=salammustafa728@gmail.com
        axios.delete(`${this.state.serverUrl}/books/${idx}?email=salammustafa728@gmail.com`).then(response => {
            this.setState({
                booksData: response.data.books,
                showUpdateForm: false
            });

        }).catch(error => alert(error.message))
    }


    render() {
        return (
            <>
                <Jumbotron>

                    <h1>My Favorite Books</h1>
                    <p>
                        This is a collection of my favorite books
                    </p>
                </Jumbotron>
                <h1 style={{ color: '#C1AC95' }}>My Books</h1>
                {this.state.booksData.length > 0 && this.state.booksData.map((book, idx) => (
                    <div style={{marginLeft:'260px'}}>
                        <Card key={idx} style={{}}>
                            <Card.Body>
                                <Card.Title><h2>{book.name}</h2></Card.Title>
                                <Card.Text>
                                    {book.description}
                                </Card.Text>
                                <Card.Text>
                                    {book.status}
                                </Card.Text>
                            </Card.Body>
                            <button className='btn' onClick={e => this.deleteMyBook(idx)} >Delete Book</button>
                            <button className='btn' onClick={() => this.setState({showForm:true})} >Update Book</button>


                        </Card>

                    </div>
                ))}

                <div style={{ marginLeft: '50px', border: '2px solid #D6D2C4', width:'50%', marginBottom:'10px',borderRadius:'10px' }}>
                    <CreateBook 
                        creteMyBook={this.creteMyBook}
                        updateName={this.updateName}
                    // updateBookName={this.updateBookName}
                    // updateBookDescription={this.updateBookDescription}
                    // updateBookStatus={this.updateBookStatus}
                    />
                         </div>
                    {
                        this.state.showForm &&
                        <div style={{ marginLeft: '50px', border: '2px solid #D6D2C4', width:'50%',marginTop:'10px',borderRadius:'10px' }}>
                            <UpdateBook
                                updateBook={this.updateBook}
                                recievedBookName={this.state.recievedBookName}
                                recievedBookDesc={this.state.recievedBookDesc}
                                recievedBookStatus={this.state.recievedBookStatus}
                            />
                        </div>
                    }
               


            </>
        )
    }
}

export default withAuth0(BestBooks)
