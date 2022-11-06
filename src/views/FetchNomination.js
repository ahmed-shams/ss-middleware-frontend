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

function FetchNomination() {
  const history = useHistory();

  const initialNominationObject = {
    promotionId: 0,
    organizationPromotionId: 0,
    organizationId: 0,
  };

  const [nomination, setNomination] = useState(initialNominationObject);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Nomination", nomination);

    axios
      .post("/nominations/fetch", nomination)
      .then(alert("Record fetched Successfully"));

    //history.push("/admin/catagorylist");
  };
  return (
    <>
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
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Promotion Id</label>
                        <Form.Control
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

                        <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter Promotion ID{" "}
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Organization Promotion Id</label>
                        <Form.Control
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
                        <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter Organization Promotion Id{" "}
                        </label>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Organization Id</label>
                        <Form.Control
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
                        <label className="text-danger mt-3 text-small">
                          {" "}
                          Please Enter Organization Id{" "}
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

export default FetchNomination;
