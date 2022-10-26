import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

function CreateNomination() {

  const history = useHistory();

  const initialUserObject = {
    
      "buzzboardInfo": "",
      "locationId": 0,
      "contestId": 0,
      "preloaded": 0,
      "voteId": 0,
      "catagoryId": 0,
      "merchantId": 0
    
}

const [user, setUser] = useState(initialUserObject);


const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("Nomination",user)
  
  axios.post('http://localhost:3001/nominations',user)
    alert("Record Added Successfully")
 
    history.push("/admin/nominationlist");

}
return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Nomination</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Buzzboard Info</label>
                                                <Form.Control
                                                    placeholder="Enter Buzzboard Info"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,buzzboardInfo: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Location</label>
                                                <Form.Control
                                                    placeholder="Enter Location"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,locationId: e.locationId.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Contest</label>
                                                <Form.Control
                                                    placeholder="Enter Contest"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,contestId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Preloaded</label>
                                                <Form.Control
                                                    placeholder="Preloaded"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,preloaded: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Vote</label>
                                                <Form.Control
                                                    placeholder="Enter Vote"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,voteId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Catagory</label>
                                                <Form.Control
                                                    placeholder="Enter Catagory"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,catagoryId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Merchant</label>
                                                <Form.Control
                                                    placeholder="Enter Merchant"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,merchantId: e.target.value }) }}
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

export default CreateNomination;
