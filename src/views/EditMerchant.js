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

import { useHistory,Link } from "react-router-dom";
function EditMerchant() {

  const history = useHistory();
 
  
  const initialMerchants = {name:'',salesForceId:''}

  const [merchants, setMerchants] = useState(initialMerchants);

  const [nmerchants, setNMerchants] = useState();

  let params = useParams();

  
useEffect(()=>{
  console.log("Id",params.id)
  axios.get('http://localhost:3001/merchants/'+params.id)

  .then(function (response) {
  debugger;
  setMerchants(response.data)
    console.log("Response",response.data);
  })

},[merchants])




const handleFormSubmit = (e) => {
  debugger;
  e.preventDefault();
  
debugger;  
  axios.patch('http://localhost:3001/merchants/'+params.id,nmerchants)
    alert("Record Edit Successfully")
 

    history.push("/admin/merchantlist");

}
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Merchants</Card.Title>
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
                                                    defaultValue={merchants?.name}
                                                    onChange={(e) => { setNMerchants({ ...nmerchants,name: e.target.value }) }}
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
                                                    defaultValue={merchants?.salesForceId}
                                              
                                                    onChange={(e) => { setNMerchants({ ...nmerchants, salesForceId: e.target.value }) }}
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

export default EditMerchant;
