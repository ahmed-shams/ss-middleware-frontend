import React, { useState, useEffect } from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory, Link } from "react-router-dom";
import axios from '../axios-service';
import { SpinnerCircular } from 'spinners-react';
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


  const handleDeleteClick = (id) => {

    alert("Are you sure! You want to delete?" + id)
    axios.delete('/nominations/' + id).then(()=>{
      setRefresh(true);
    })
  }

  const initialNominations = [{ id: 1, name: "nomination1", salesid: 1 }]

  const [nominations, setNominations] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (refresh) {


      axios.get('/nominations')
        .then(function (response) {
          setRefresh(false);
          setTimeout(function () {
            $("#organizerList").DataTable();
          }, 100);
          setNominations(response.data);
          setLoading(false);
        })
    }

  }, [nominations,refresh])

  if (loading)
  return (
    
      <div style={{height:'100%', display:'flex', justifyContent:'center'}}>
          <SpinnerCircular />
      </div>
  )
  else
  return (
    <>
      <Container fluid>
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
                      <th className="border-0">Entity Name</th>
                      <th className="border-0">Catagory</th>
                      <th className="border-0">Address</th>
                      <th className="border-0">Phone Number</th>
                      <th className="border-0">Vote Count</th>
                      <th className="border-0">Leads Id</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                    {nominations.map((result) => {
                      return (
                        <tr key={result.id}>
                          <td>{result.id}</td>
                          <td>{result.entity_name}</td>
                          <td>{result.category}</td>
                          <td>{result.address}</td>
                          <td>{result.phoneNumber}</td>
                          <td>{result.vote_count}</td>
                          <td>{result.leadsId}</td>
                         
                          
                          {/* <td>
                            <Link className="btn btn-primary btn-round" to={`/admin/editnomination/${result.id}`}>
                              Edit
                            </Link>
                          </td> */}
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
