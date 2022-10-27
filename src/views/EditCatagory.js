import React,{useState,useEffect} from "react";
import axios from '../axios-service';
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

import { useParams } from "react-router-dom";

function EditCatagory() {
  const history = useHistory();


  const [catagories, setCatagories] = useState([]);

  const [Ncatagories, setNCatagories] = useState();

  let params = useParams();

  
useEffect(()=>{
  axios.get('/categories/'+params.id)
  .then(function (response) {
    setCatagories(response.data)
    console.log("Response",response.data);
  })

},[])




const handleFormSubmit = (e) => {
  e.preventDefault();
  console.log("Catagory",Ncatagories) 
  axios.patch('/categories/'+params.id,Ncatagories)
    alert("Record Edit Successfully")
    history.push("/admin/catagorylist");

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
                                                    defaultValue={catagories?.name}
                                                    onChange={(e) => { setNCatagories({ ...Ncatagories,name: e.target.value }) }}
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
                                                    defaultValue={catagories?.salesForceId}
                                              
                                                    onChange={(e) => { setNCatagories({ ...Ncatagories, salesForceId: e.target.value }) }}
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
