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
  Alert,
} from "react-bootstrap";

function CatagoryList() {
  
  const history = useHistory();


  setTimeout(function () {
    $('#organizerList').DataTable();
}, 100);


const data = ["1","Catagpry1","1"];


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

const users = [{id:1,name:"Catagory1",salesid:1},
{id:2,name:"Catagory2",salesid:2},
{id:3,name:"Catagory3",salesid:3}]




  return (
    <>
      <Container fluid>
        <Row>
        <Col md="12">
            <Card className="strpied-tabled-with-hover">

                  <Button className="btn-fill pull-right" type="button" onClick={(e) => {
                        history.push("/admin/createcatagory");
                    }}>
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
                <Table id="organizerList" className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th className="border-0">ID</th>
                      <th className="border-0">Name</th>
                      <th className="border-0">Sales Force Id</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                  {users.map((result) => {
                                return (
                                    <tr key={result.id}>
                                    <td>{result.id}</td>
                                        <td>{result.name}</td>
                                        <td>{result.salesid}</td>
                                        <td>
                                            <Link className="btn btn-primary btn-round" to={`/admin/editcatagory/${result.id}`}>
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

export default CatagoryList;
