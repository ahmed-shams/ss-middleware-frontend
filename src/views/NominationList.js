import React from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory,Link } from "react-router-dom";

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
 
  const history = useHistory();


  setTimeout(function () {
    $('#organizerList').DataTable();
}, 100);
 

const handleDeleteClick = (id) => {
  // swal({
  //     title: "Are you sure?",
  //     text: "You wont be able to recover this user!",
  //     icon: "warning",
  //     buttons: true,
  //     dangerMode: true,
  // })
  //     .then((willDelete) => {
  //         if (willDelete) {
  //           alert("Done")
  //             // dispatch(deleteUser(id));
  //             // dispatch(getUsers());
  //         } else {

  //         }
  //     });

  alert("Are you sure! You want to delete?"+id)
}

const users = [
  {id:1,buzzboard_info:"Nomination1",location_id:1,contest_id:1,preloaded:1,vote_id:1,catagory_id:1,merchant_id:1},
{id:2,buzzboard_info:"Nomination2",location_id:2,contest_id:2,preloaded:2,vote_id:2,catagory_id:2,merchant_id:2},]


  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">
                  
                  <Button className="btn-fill pull-right" type="button" onClick={(e) => {
                        history.push("/admin/createnomination");
                    }}>
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
                    
                  {users.map((result) => {
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
