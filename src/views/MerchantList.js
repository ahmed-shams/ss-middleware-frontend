import React from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory } from "react-router-dom";

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

function MerchantList() {


  const history = useHistory();


  setTimeout(function () {
    $('#organizerList').DataTable();
}, 100);


  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
        

                  <Button className="btn-fill pull-right" type="button" onClick={(e) => {
                        history.push("/admin/createmerchant");
                    }}>
                       Create Merchant
                    </Button>


                  </Card>
                  </Col>
        </Row>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">
              <Card.Header>
                <Card.Title as="h4">Merchants</Card.Title>
                
              </Card.Header>
              <Card.Body className="table-full-width table-responsive px-0">
                <Table id="organizerList" className="table-hover table-striped">
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
                      <td>Merchant1</td>
                      <td>1</td>
                      <a href="createmerchant">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Merchant2</td>
                      <td>2</td>
                      <a href="createmerchant">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Merchant3</td>
                      <td>3</td>
                      <a href="createmerchant">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Merchant4</td>
                      <td>4</td>
                      <a href="createmerchant">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Merchant5</td>
                      <td>5</td>
                      <a href="createmerchant">
                      <td>Edit</td>
                      </a>
                      <a href="">
                      <td>Delete</td>
                      </a>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Merchant6</td>
                      <td>6</td>
                      <a href="createmerchant">
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

export default MerchantList;
