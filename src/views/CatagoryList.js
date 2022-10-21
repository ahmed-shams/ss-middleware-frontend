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

function CatagoryList() {
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
                    href="createcatagory"
                  >
                    Create Catagory
                  </Button>
                  </Card>
                  </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Catagories</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Sales Force Id</th>
                     
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Catagory1</td>
                      <td>1</td>
                      <a href="createcatagory">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Catagory2</td>
                      <td>2</td>
                      <a href="createcatagory">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Catagory3</td>
                      <td>3</td>
                      <a href="createcatagory">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Catagory4</td>
                      <td>4</td>
                      <a href="createcatagory">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Catagory5</td>
                      <td>5</td>
                      <a href="createcatagory">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Catagory6</td>
                      <td>6</td>
                      <a href="createcatagory">
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

export default CatagoryList;
