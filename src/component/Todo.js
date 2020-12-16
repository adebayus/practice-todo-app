import React from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import ModalEdit from './ModalEdit'

function Todo(props) {
    const [modalShow, setModalShow] = React.useState(false);
    // const [newDetail, setNewDetail] =  React.useState("")


    const closedModal =(on) =>{
        setModalShow(on)
    }
    // const styleCol = {
    //     width: "100%",
    //     height: "100%"
    // }
    return (
        <div>
            <Row style={{
                height: "auto",
                display: "flex",
                alignItems:"center",
                padding: "20px 0",
                margin:"0"
            }} >
                <Col lg={10} style={
                        {
                            margin:"0px",
                            paddingRight: "15px",
                            paddingLeft: "0px",
                            wordWrap: "break-word",
                            width:"100%",
                            height: "100%"
                        }
                    }>
                    <p style={
                        {
                            margin:"0px",
                            padding: "0px"
                        }
                    }>{props.name} </p>
                </Col>
                <Col lg={2}>
                    <Row>
                       <Col lg={6} onClick={() => props.deletedata(props.id)} style={{padding:"0",display: "flex", justifyContent: "center"}}>
                           <Button variant="danger">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                               <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                            </svg>
                           </Button>

                       </Col>
                        <Col lg={6} style={{padding:"0", display: "flex", justifyContent: "center"}}>
                            <Button variant="primary" onClick={() => setModalShow(true)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                            </Button>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <hr/>
            <ModalEdit id={props.id} detail={props.name}  changeedit={props.changeEdit} closedModal={closedModal} show={modalShow} onHide={() => setModalShow(false)} ></ModalEdit>
        </div>
    )
}

export default Todo
