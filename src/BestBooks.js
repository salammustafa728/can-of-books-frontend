import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel'
import CreateBook from './Component/CreateBooks';
import UpdateBook from './Component/UpdateFormModel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image'

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
            showUpdateForm: false,
            bookNameUpdate: '',
            descriptionUpdate: '',
            statusUpdate: '',
            bookIndex: 0

        }
    }
    updateBookName = (bookName) => this.setState({ bookName });
    updateBookDescription = (description) => this.setState({ description });
    updateBookStatus = (status) => this.setState({ status });

    updateBookNameUpdate = (bookName) => this.setState({ bookNameUpdate: bookName });
    updatedescriptionUpdate = (description) => this.setState({ descriptionUpdate: description });
    updatestatusUpdate = (status) => this.setState({ statusUpdate: status });
    showUpdateForm = (booksObj, idx) => this.setState({
        showUpdateForm: !this.state.showUpdateForm,
        bookNameUpdate: booksObj.name,
        descriptionUpdate: booksObj.description,
        statusUpdate: booksObj.status,
        bookIndex: idx
    })


    creteMyBook = (evt) => {
        evt.preventDefault();
        const requestBody = {
            bookName: this.state.bookName,
            description: this.state.description,
            status: this.state.status,
            email: this.state.email
        }

        axios.post(`${this.state.serverUrl}/book`, requestBody).then(response => {
            this.setState({
                booksData: response.data.books
            })
        }).catch(error => {
            alert(error.message)
        })
    }

    UpdateBookName = (bookName) => { this.setState({ bookName }) }
    UpdatebookDescrption = (bookDescrption) => { this.setState({ bookDescrption }) }
    Updatebookstatus = (bookstatus) => { this.setState({ bookstatus }) }
    updateBookModel = (bookName) => { this.setState({ bookUpdateName: bookName }) }
    updatedescriptionUpdate = (description) => this.setState({ bookUpdateDescrption: description });
    updatestatusUpdate = (status) => this.setState({ bookUpdateStatus: status });

    deleteMyBook = (index) => {
        axios.delete(`${this.state.serverUrl}/books/${index}?email=${this.state.email}`).then(response => {
            this.setState({
                booksData: response.data.books,
                showUpdateForm: false
            });

        }).catch(error => alert(error.message))
    }

    updateMyBook = (evt) => {
        evt.preventDefault();
        const requestBody = {
            bookName: this.state.bookNameUpdate,
            description: this.state.descriptionUpdate,
            status: this.state.statusUpdate,
            email: this.state.email
        }

        axios.put(`${this.state.serverUrl}/books/${this.state.bookIndex}`, requestBody).then(response => {
            this.setState({
                booksData: response.data.books
            })
        }).catch(error => {
            alert(error.message)
        })
    }
    deleteMyBook = (idx) => {

        axios.delete(`${this.state.serverUrl}/books/${idx}?email=${this.state.email}`).then(response => {
            this.setState({
                booksData: response.data.books,
                showUpdateForm: false
            })
        }).catch(error => {
            alert(error.message)
        })

    }
    componentDidMount = () => {
        axios.get(`${this.state.serverUrl}/books?email=${this.state.email}`).then(response => {
            this.setState({
                booksData: response.data.books
            })
        }).catch(
            error => {
                alert(error.message);
            }
        );
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
                <h2 style={{color:'red'}}>My Books</h2>

               
                {this.state.booksData.length > 0 && this.state.booksData.map((book, idx) => (

                    <>
                     <Carousel>
                     <Image style={{marginLeft:'400px'}} src="https://d2r68eeixpqexd.cloudfront.net/41fd2ced63aa8d47a3142fa4cd46849b.jpg" roundedCircle />
                     <div key={idx} style={{marginLeft:'50px',border:'2px solid #D6D2C4'}}>
                            

                            {book.name} <br></br>
                            {book.description}<br></br>
                            {book.status}<br></br>
                            <button style={{background:'#F7DAD9'}} onClick={evt => this.deleteMyBook(idx)}>Delete</button>
                            <button style={{background:'#FFF5DA'}} onClick={evt => this.showUpdateForm(book, idx)}>Update Form</button>
                            <br></br>
                            <br></br>
                        </div>
                     </Carousel>
                    </>
                ))}
                <Carousel>
                    <div style={{marginLeft:'50px',border:'2px solid #D6D2C4'}}>

                        <CreateBook
                            creteMyBook={this.creteMyBook}
                            updateBookName={this.updateBookName}
                            updateBookDescription={this.updateBookDescription}
                            updateBookStatus={this.updateBookStatus}
                        />
                        {
                            this.state.showUpdateForm &&
                            <div>
                                <UpdateBook
                                    updateMyBook={this.updateMyBook}
                                    updateBookNameUpdate={this.updateBookNameUpdate}
                                    updatedescriptionUpdate={this.updatedescriptionUpdate}
                                    updatestatusUpdate={this.updatestatusUpdate}
                                    bookNameUpdate={this.state.bookNameUpdate}
                                    descriptionUpdate={this.state.descriptionUpdate}
                                    statusUpdate={this.state.statusUpdate}

                                />
                            </div>
                        }
                    </div>
                </Carousel>

            </>
        )
    }
}

export default withAuth0(BestBooks)
