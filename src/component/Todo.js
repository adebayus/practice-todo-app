import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Todo(props) {
    return (
        <div>
            <Row style={{
                height: "60px",
                display: "flex",
                alignItems:"center",
                margin:"0"
            }}>
                <Col style={
                        {
                            margin:"0px",
                            padding: "0px"
                        }
                    }>
                    <p style={
                        {
                            margin:"0px",
                            padding: "0px"
                        }
                    }>{props.name}</p>
                </Col>
            </Row>
            <hr/>
            
        </div>
    )
}

export default Todo
