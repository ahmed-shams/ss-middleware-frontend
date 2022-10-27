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

function EditNomination() {
  
  const initialNomination = 
  {
    
    "buzzboard_info": "",
    "location_id": "",
    "contest_id": "",
    "preloaded": "",
    "vote_id": "",
    "catagory_id": "",
    "merchant_id": ""
  
}

  const [nomination, setNomination] = useState(initialNomination);

  const [nnomination, setNNomination] = useState();

  let params = useParams();
  const history = useHistory();

  
useEffect(()=>{
  axios.get('/nominations/'+params.id)
  .then(function (response) {
  setNomination(response.data)

  })

},[nomination])




const handleFormSubmit = (e) => {
  e.preventDefault();
  axios.patch('/nominations/'+params.id,nnomination)
    alert("Record Edit Successfully")
 
    history.push("/admin/nominationlist");
}
  
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit Nomination</Card.Title>
              </Card.Header>
              <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Buzzboard Info
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Buzzboard Info"
                                                    type="text"
                                                    defaultValue={nomination?.buzzboard_info}
                                                    onChange={(e) => { setNNomination({ ...nnomination, buzzboardInfo: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Location
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Location"
                                                    type="text"
                                                    defaultValue={nomination?.location_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, locationId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Contest
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Contest"
                                                    type="text"
                                                    defaultValue={nomination?.contest_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, contestId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Preloaded
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Preloaded"
                                                    type="text"
                                                    defaultValue={nomination?.preloaded}
                                                    onChange={(e) => { setNNomination({ ...nnomination, preloaded: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Vote
                                                </label>
                                                <Form.Control
                                                    placeholder="Vote"
                                                    type="text"
                                                    defaultValue={nomination?.vote_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, voteId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Catagory
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Catagory"
                                                    type="text"
                                                    defaultValue={nomination?.catagory_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, catagoryId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Merchant
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Merchant"
                                                    type="text"
                                                    defaultValue={nomination?.merchant_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, merchantId: e.target.value }) }}
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

export default EditNomination;
