import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export class UpdateBook extends Component {
    render() {
        return (
            <div>
                <Form onSubmit={(evt) => this.props.updateMyBook(evt)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Book Name</Form.Label>
                        <Form.Control value={this.props.bookNameUpdate} onChange={(evt) => this.props.updateBookNameUpdate(evt.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Discription</Form.Label>
                        <Form.Control value={this.props.descriptionUpdate} as="textarea" row={5} onChange={(evt) => this.props.updatedescriptionUpdate(evt.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Status</Form.Label>
                        <Form.Control value={this.props.statusUpdate}  onChange={(evt) => this.props.updatestatusUpdate(evt.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update Book
                    </Button>
                </Form>
            </div>
        )
    }
}

export default UpdateBook;