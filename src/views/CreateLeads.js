import React, { useEffect, useState } from "react";
import axios from "../axios-service";

import { useHistory, Link } from "react-router-dom";
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
  Dropdown,
} from "react-bootstrap";

function CreateLeads() {
  const history = useHistory();

  const initiaLeadObject = {
    Company: "",
    LastName: "",
  };

  const [lead, setLead] = useState(initiaLeadObject);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Lead", lead);

    axios.post("/leads", lead).then((res) => {
      console.log("Response",res.data)
      alert("Response" + res.data.message);
      //alert("Response" + res.Body);
    });
  };
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Lead</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Company</label>
                        <Form.Control
                          placeholder="Enter Company"
                          type="text"
                          required="{true}"
                          onChange={(e) => {
                            setLead({ ...lead, Company: e.target.value });
                          }}
                        ></Form.Control>

                        <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter Company{" "}
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Name</label>
                        <Form.Control
                          placeholder="Enter LastName"
                          type="text"
                          required="{true}"
                          onChange={(e) => {
                            setLead({ ...lead, LastName: e.target.value });
                          }}
                        ></Form.Control>
                        <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter LastName{" "}
                        </label>
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

export default CreateLeads;
