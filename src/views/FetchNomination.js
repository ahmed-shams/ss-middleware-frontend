import React, { useEffect, useState } from "react";
import axios from "../axios-service";
import { SpinnerCircular } from "spinners-react";
import Overlay from "react-overlay-component";
import { useHistory, Link } from "react-router-dom";
// react-bootstrap components
import $ from "jquery";
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
  Dropdown,
  Table
} from "react-bootstrap";

function FetchNomination() {
  const history = useHistory();
  const [isOpen, setOverlay] = useState(false);

  const closeOverlay = () => setOverlay(false);
  const configs = {
    animate: true,
    clickDismiss: false,
    escapeDismiss: false,
    focusOutline: true,
    showCloseIcon: false,
  
  };

  const initialNominationObject = {
    promotionId: 0,
    organizationPromotionId: 0,
    organizationId: 0,
    state: "",
    city: "",
    contestTitle:""
  };

  const [nomination, setNomination] = useState(initialNominationObject);
  const [nominationrequest, setNominationRequest] = useState([]);
  const [refresh, setRefresh] = useState(true);
  


  useEffect(() => {
    if (refresh) {
      axios.get("/nomination-request").then(function (response) {
        setNominationRequest(response.data);
        
         setRefresh(false);
      });
    }
  }, [nominationrequest, refresh]);


  const handlePresetValues = (result) => {
   // alert(result.state);
   delete result.id;
    setNomination(result);
    $("#promotionId").val(result.promotionId);
    $("#organizationPromotionId").val(result.organizationPromotionId);
    $("#organizationId").val(result.organizationId);
    $("#state").val(result.state);
    $("#city").val(result.city);
    $("#contestTitle").val(result.contestTitle);
    
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
console.log(nomination)    
    setOverlay(true);
    axios
      .post("/nominations/fetch", nomination)
  };
  
    return (
      <>
        <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
          <h2>Fetching process has been started, it will take around 4 to 5 minutes to get completed</h2>
          <Row>
          <Col md="8">

          </Col>
          <Col md="4">
            <Card className="strpied-tabled-with-hover">
          <Button
          
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                      onClick={(e) => {
                  history.push("/admin/nominationlist");
                }}
                    >
                      OK
                    </Button>
                    </Card>
                    </Col>
                    </Row>
        
        </Overlay>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Fetch Nomination</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handleFormSubmit}>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Promotion Id</label>
                          <Form.Control
                          id="promotionId"
                            placeholder="Enter Promotion Id"
                            type="number"
                            required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                promotionId: e.target.value,
                              });
                            }}
                          ></Form.Control>

                        
                        </Form.Group>
                      </Col>
                    
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Organization Promotion Id</label>
                          <Form.Control
                          id="organizationPromotionId"
                            placeholder="Enter Organization Promotion Id"
                            type="number"
                            required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                organizationPromotionId: e.target.value,
                              });
                            }}
                          ></Form.Control>
                          
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Organization Id</label>
                          <Form.Control
                          id="organizationId"
                            placeholder="Enter Organization Id"
                            type="number"
                            required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                organizationId: e.target.value,
                              });
                            }}
                          ></Form.Control>
                          
                        </Form.Group>
                      </Col>
                    
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>State</label>
                          <Form.Control
                          id="state"
                            placeholder="Enter State"
                            type="text"
                            required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                state: e.target.value,
                              });
                            }}
                          ></Form.Control>
                          
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>Contest Title</label>
                          <Form.Control
                          id="contestTitle"
                            placeholder="Enter Contest Title"
                            type="text"
                            required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                contestTitle: e.target.value,
                              });
                            }}
                          ></Form.Control>

                          
                        </Form.Group>
                      </Col>
                    
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                          id="city"
                            placeholder="Enter City"
                            type="text"
                            // required="{true}"
                            onChange={(e) => {
                              setNomination({
                                ...nomination,
                                city: e.target.value,
                              });
                            }}
                          ></Form.Control>
                          {/* <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter City{" "}
                        </label> */}
                        </Form.Group>
                      </Col>
                    </Row>
                    <Button
                      className="btn-fill pull-right"
                      type="submit"
                      variant="info"
                    >
                      Fetch
                    </Button>
                    <div className="clearfix"></div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
          
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Nomination Request</Card.Title>
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table id="organizerList" className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0"></th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {nominationrequest.map((result) => {
                      return (
                        <tr key={result.id}>
                          <td>
                            <button
                              onClick={(e) => handlePresetValues(result)}
                              type="button"
                              style={{border:"none",background:"none"}}
                              //className=" pull-right"
                            >
                            {result.contestTitle}
                              
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          </Row>
        </Container>
      </>
    );
}

export default FetchNomination;
