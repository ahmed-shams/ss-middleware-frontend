import React, { useEffect, useState } from 'react';
import axios from 'axios-service';

import { useHistory,Link } from "react-router-dom";
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

function CreateMerchant() {

  
  const history = useHistory();
  

  const initialUserObject = {
    name: '',
    salesForceId: '',
}

const [user, setUser] = useState(initialUserObject);


const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("Merchant",user)
  
  axios.post('/merchants',user)
    alert("Record Added Successfully")
    history.push("/admin/merchantlist");

}
return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Merchant</Card.Title>
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
                                                    required="{true}"
                                                    onChange={(e) => { setUser({ ...user,name: e.target.value }) }}
                                                ></Form.Control>
                                              <label className="text-danger mt-3 text-small"> Please Enter Name </label>
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
                                                    required="{true}"
                                                    onChange={(e) => { setUser({ ...user, salesForceId: e.target.value }) }}
                                                ></Form.Control>
                                               <label className="text-danger mt-3 text-small"> Please Enter Sales Force </label>
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

export default CreateMerchant;
