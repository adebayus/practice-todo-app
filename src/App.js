import React, { useState } from 'react'
import './App.css';
import {Button, Col, Form, InputGroup } from 'react-bootstrap';
import Todo from './component/Todo'

function App() {
    const [data, setData] = useState([])
    const [todo, setTodo] = useState("")
    console.log(data,"setData")
    function addTodo(e) {
        e.preventDefault();

        const randomId = Math.floor(Math.random() * 1000);

        if(data.some(id => id.id === randomId )){
            console.log(true)
            setTodo("")

        }else{
            console.log(false)
            setData([...data, {id: randomId , detail : todo }])
            setTodo("")
        }  
    }


    const onChangeHandler = (event) => {
        
        setTodo(event.target.value)
        console.log(todo)
    }

    const deleteData = (idDelete) => {
        const deleteIt = data.filter(dataID => dataID.id !== idDelete)
        console.log(deleteIt,"filter")
        setData(deleteIt)
        console.log("deleteIt")
    }

    return (
        <div className="App">
          <Form className="form-todo" onSubmit={addTodo}>
              <Form.Row>
                  <Col sm={8} xs={8} >
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
                        
                        onChange={onChangeHandler}
                        value={todo} 
                        className="input-todo"
                        type="text" 
                        placeholder="Whats needs to be done ?" required/>
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        
                      </InputGroup>
                  </Col>
                  <Col sm={4} xs={4} >
                    <Button variant="primary" size="sm"  type="submit" className="btn-submit"  >
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path fillRule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg> 
                        Add
                    </Button>
                  </Col>
              </Form.Row>
          </Form>

          <div className="wrapper-todo-list">
              <div className="title">
                  <h4>Todo List</h4>   
              </div>

              <div className="wrapper-todo">
                  {data.map((value)=>{
                    //   console.log(value,"value")
                      return(
                          <Todo key={value.id} 
                          id={value.id} 
                          deletedata = {deleteData}
                          name={value.detail}/>
                      )
                  })}
              </div>

          </div>

        </div>
    );
}

export default App;
