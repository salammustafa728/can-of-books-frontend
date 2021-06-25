import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class CreateBook extends Component {
    render() {
        return (
            <div>
                
                <Form onSubmit={(evt) => this.props.creteMyBook(evt)}>
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type='text'/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control type='text'  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="status">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type='text'   />
                    </Form.Group>
                   
                    <Button style={{background:'#FF94CC'}} type="submit">
                        Create Book
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateBook;