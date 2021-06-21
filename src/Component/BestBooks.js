import React, { Component } from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import axios from 'axios';




export class BestBooks extends Component {
constructor(props){
    super(props);
    this.state={
        bookData:[],
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
        error=>{
            alert(error.message)
        }
    );
}

    render() {
        return (
            <div>
                {this.state.booksStatus &&
                <>
                {this.state.bookData[0].Books.map(value=>{
                    return (
                        <>
                             <h1>{value.name}</h1>
                             <p>{value.description}</p>
                             <p>{value.status}</p>
                        </>
                    )
                })}
                 {/* <img  /> */}
                
                </>
                
                }
                
            </div>
        )
    }
}

export default withAuth0(BestBooks)
