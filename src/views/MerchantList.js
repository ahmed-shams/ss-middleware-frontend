import React,{useState,useEffect} from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory,Link } from "react-router-dom";
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



function MerchantList() {
  
  const history = useHistory();




const handleDeleteClick = (id) => {
  
  alert("Are you sure! You want to delete?"+id)
    axios.delete('/merchants/'+id ).then(()=>{
      setRefresh(true);
    })
}



const [merchants, setMerchants] = useState([]);
const [loading, setLoading] = useState(true);
const [refresh, setRefresh] = useState(true);



useEffect(()=>{

  if(refresh){
    axios.get('/merchants')
    .then(function (response) {
        setMerchants(response.data)
        setTimeout(function () {
          $("#organizerList").DataTable();
        }, 100);
        setRefresh(false);
        setLoading(false);
    })
  }


},[merchants, refresh])

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
                      <th className="border-0">Sales Force</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>

                  {merchants.map((result) => {
                                return (
                                    <tr key={result.id}>
                                    <td>{result.id}</td>
                                        <td>{result.name}</td>
                                        <td>{result.salesForceId}</td>
                                        <td>
                                            <Link className="btn btn-primary btn-round" to={`/admin/editmerchant/${result.id}`}>
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

export default MerchantList;
