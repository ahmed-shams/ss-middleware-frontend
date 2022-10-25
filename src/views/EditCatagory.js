import React,{useState,useEffect} from "react";
import axios from 'axios';
// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Dropdown
} from "react-bootstrap";

import { useParams } from "react-router-dom";

function EditCatagory() {
  
  const initialCatagories = {name:"",salesForceId:""}

  const [catagories, setCatagories] = useState(initialCatagories);


  let params = useParams();

  
useEffect(()=>{
  console.log("Id",params.id)
  axios.get('http://localhost:3001/categories/'+params.id)

  .then(function (response) {
  debugger;
    setCatagories(response.data)
    console.log("Response",response.data);
  })

},[catagories])




const handleFormSubmit = (e) => {
  debugger;
  e.preventDefault();
  console.log("Catagory",catagories)
debugger;  
  axios.patch('http://localhost:3001/categories/'+params.id,catagories)
    alert("Record Edit Successfully")
 

}
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Catagory</Card.Title>
              </Card.Header>
              <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                                <label>
                                                   Name
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Name"
                                                    type="text"
                                                    value={catagories?.name}
                                                    onChange={(e) => { setCatagories({ ...catagories,name: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>



                    </Col>
                    
                  </Row>
                  <Row>
                    
                  <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                                <label>
                                                   Sales Force
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Sales Force"
                                                    type="text"
                                                    value={catagories?.salesForceId}
                                              
                                                    onChange={(e) => { setCatagories({ ...catagories, salesForceId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>



                    </Col>
                  </Row>
                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Save 
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </Container>
    </>
  );
}

export default EditCatagory;
