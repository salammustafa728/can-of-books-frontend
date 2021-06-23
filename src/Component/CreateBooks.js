import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class CreateBook extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(evt) => this.props.creteMyBook(evt)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control type={this.props.updateBookName} onChange={(evt) => this.props.updateBookName(evt.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control type={this.props.updateBookDescription} onChange={(evt) => this.props.updateBookDescription(evt.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Status</Form.Label>
                        <Form.Control type={this.props.updateBookStatus}  onChange={(evt) => this.props.updateBookStatus(evt.target.value)} />
                    </Form.Group>
                   
                    <Button variant="primary" type="submit">
                        Create Book
                    </Button>
                </Form>
            </div>
        )
    }
}

export default CreateBook;