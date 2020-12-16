import React from 'react'
import { Modal, Button, Form, InputGroup } from 'react-bootstrap'

function ModalEdit(props) {
    return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <InputGroup size="sm" >
                    <InputGroup.Prepend className="container-prepend">
                        <InputGroup.Text className="prepend-text">
                            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-tags" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M3 2v4.586l7 7L14.586 9l-7-7H3zM2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2z"/>
                                <path fillRule="evenodd" d="M5.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm0 1a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                <path d="M1 7.086a1 1 0 0 0 .293.707L8.75 15.25l-.043.043a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 0 7.586V3a1 1 0 0 1 1-1v5.086z"/>
                            </svg>
                        </InputGroup.Text>
                    </InputGroup.Prepend>
                    <Form.Control
                    //nChange={}
                    //value={} 
                    className="input-todo"
                    type="text" 
                    placeholder="Whats needs to be done ?" required/>
                </InputGroup>  
            </Form>
            
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={props.onHide} size="md" variant="danger">Cancel</Button>
            <Button onClick={props.onHide}>Close</Button>
            
        </Modal.Footer>
    </Modal>
    )
}

export default ModalEdit
