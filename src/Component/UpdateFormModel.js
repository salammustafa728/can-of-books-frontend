import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class UpdateBook extends Component {
    render() {
        return (
            <div>
                {/* <Form onSubmit={(evt) => this.props.updateBook(evt)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control value={this.props.bookName}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control value={this.props.description} as="textarea" row={5}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control value={this.props.status} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Book
                    </Button>
                </Form> */}
                <Form onSubmit={(e)=> this.props.updateBook(e)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Edit New Book</Form.Label>
                        <Form.Control 
                         type="text" placeholder="Enter book name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="desc">
                       
                        <Form.Control 
                         type="text" placeholder="Enter book name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                       
                        <Form.Control 
                         type="text" placeholder="Enter book name" />

                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateBook;