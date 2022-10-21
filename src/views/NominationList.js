import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";

function NominationList() {
  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
        <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    href="createnomination"
                  >
                    Create Nomination
                  </Button>
                  </Card>
                  </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Nominations</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Buzzboard Info</th>
                      <th className="border-0">Location Id</th>
                      <th className="border-0">Contest Id</th>
                      <th className="border-0">Preloaded</th>
                      <th className="border-0">Vote Id</th>
                      <th className="border-0">Catagory Id</th>
                      <th className="border-0">Merchant Id</th>
                     <th></th>
                     <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <a href="createnomination">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
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

export default NominationList;
