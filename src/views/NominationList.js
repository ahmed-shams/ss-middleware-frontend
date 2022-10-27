import React, { useState, useEffect } from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory, Link } from "react-router-dom";
import axios from '../axios-service';
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
  Alert,
} from "react-bootstrap";

function NominationList() {

  const history = useHistory();


  setTimeout(function () {
    $('#organizerList').DataTable();
  }, 100);


  const handleDeleteClick = (id) => {

    alert("Are you sure! You want to delete?" + id)
    axios.delete('/nominations/' + id).then(()=>{
      setRefresh(true);
    })
  }

  const initialNominations = [{ id: 1, name: "nomination1", salesid: 1 }]

  const [nominations, setNominations] = useState([]);
  const [refresh, setRefresh] = useState(true);


  useEffect(() => {
    if (refresh) {


      axios.get('/nominations')
        .then(function (response) {
          setRefresh(false);
          setNominations(response.data);
         
        })
    }

  }, [])


  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="strpied-tabled-with-hover">

              <Button className="btn-fill pull-right" type="button" onClick={(e) => {
                history.push("/admin/createnomination");
              }}>
                Create Nominations
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
                <Table id="organizerList" className="table-hover table-striped">
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
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {nominations.map((result) => {
                      return (
                        <tr key={result.id}>
                          <td>{result.id}</td>
                          <td>{result.buzzboard_info}</td>
                          <td>{result.location_id}</td>
                          <td>{result.contest_id}</td>
                          <td>{result.preloaded}</td>
                          <td>{result.vote_id}</td>
                          <td>{result.catagory_id}</td>
                          <td>{result.merchant_id}</td>
                          <td>
                            <Link className="btn btn-primary btn-round" to={`/admin/editnomination/${result.id}`}>
                              Edit
                            </Link>

                            <button onClick={(e) => handleDeleteClick(result.id)} type="button" className="btn btn-round btn-danger">
                              <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                          </td>
                        </tr>
                      )
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

export default NominationList;
