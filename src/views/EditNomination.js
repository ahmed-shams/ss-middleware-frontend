import React, { useState, useEffect } from "react";
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

import { useParams } from "react-router-dom";
import $ from "jquery";

function EditNomination() {
  const [refresh, setRefresh] = useState(true);

  const initialNomination = {
    entity_name: "",
    category: "",
    vote_count: "",
  };

  const [nomination, setNomination] = useState(initialNomination);

  const [nnomination, setNNomination] = useState();

  let params = useParams();
  const history = useHistory();

  useEffect(() => {
    if (refresh) {
      axios.get("/nominations/" + params.id).then(function (response) {
        setRefresh(false);
        setNomination(response.data);
      });
    }
  }, [nomination]);

  const handleFormSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log(nnomination);
    axios.patch("/nominations/" + params.id, nnomination).then((res) => {
      if (!res.error && nnomination != undefined) {
        alert("Record Edit Successfully");
        history.push("/admin/nominationlist");
      } else {
        alert("Some thing went wrong" + res.error);
      }
    });
  };

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
                        <label>Entity Name</label>
                        <Form.Control
                          placeholder="Enter Entity Name"
                          type="text"
                          required="{true}"
                          defaultValue={nomination?.entity_name}
                          onChange={(e) => {
                            setNNomination({
                              ...nnomination,
                              entityName: e.target.value,
                            });
                          }}
                        ></Form.Control>
                        {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Category</label>
                        <Form.Control
                          placeholder="Enter Category"
                          type="text"
                          required="{true}"
                          defaultValue={nomination?.category}
                          onChange={(e) => {
                            setNNomination({
                              ...nnomination,
                              category: e.target.value,
                            });
                          }}
                        ></Form.Control>
                        {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                        <label>Vote Count</label>
                        <Form.Control
                          placeholder="Enter Vote Count"
                          type="number"
                          required="{true}"
                          defaultValue={nomination?.vote_count}
                          onChange={(e) => {
                            setNNomination({
                              ...nnomination,
                              voteCount: e.target.value || null,
                            });
                          }}
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
