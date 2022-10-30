import React, { useEffect, useState } from 'react';
import axios from '../axios-service';
import { useHistory,Link } from "react-router-dom";
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
  Dropdown
} from "react-bootstrap";
import $ from 'jquery';


function CreateNomination() {
  const [refresh, setRefresh] = useState(true);
  const history = useHistory();
  const [user, setUser] = useState({});
  const [catagoryId, setcatagoryId] = useState();
  const [merchantId, setmerchantId] = useState();


const handleFormSubmit = (e) => {
  e.preventDefault();
  user.catagoryId = catagoryId;
  user.merchantId = merchantId;
  
  axios.post('/nominations',user).then(()=>{
    alert("Record Added Successfully") 
    history.push("/admin/nominationlist");
  })

}


const [merchants, setMerchants] = useState([]);
useEffect(()=>{
  if (refresh) {

  axios.get('/merchants').
  then(function (response){
    setRefresh(false); 
    setMerchants(response.data);
    if(response.data && response.data.length){
      setmerchantId(response.data[0].id)
    }
  })
  }
},[merchants, refresh])



const handleMerchantDDChange = (e) => {
  const id = $(`#merchantDD option[value="${e.target.value}"]`).attr('data-id');
  setmerchantId(id)
}

const getMerchantDropdown = () => {
  const options = merchants.map(u => {
      return (
        <option className="w-100" key={u.id} value={u.id} data-id={u.id}>{u.name}</option>
      );
  });

  return (
      <>

      <Form.Select id="merchantDD" className="form-control w-100" onChange={handleMerchantDDChange}>
        {options}
      </Form.Select>
          <label>
              {
                 
                  <label className="text-danger mt-3 text-small"> Please select a Merchant </label>
              }
          </label>
      </>
  );
}

const [catagories, setCatagories] = useState([]);


useEffect(()=>{
  if (refresh) {

  axios.get('/categories'
  ).then(function (response) {
    setRefresh(false); 
    setCatagories(response.data);
    if(response.data && response.data.length){
    setcatagoryId(response.data[0].id)
  }
  })
}
})


const handleCatagoryDDChange = (e) => {
  const id = $(`#catagoryDD option[value="${e.target.value}"]`).attr('data-id');
  setcatagoryId(id);
}


const getCatagoryDropdown = () => {
  
  const options = catagories.map(u => {
      return (
          <option className="w-100" key={u.id} data-id={u.id} value={u.id}>{u.name}</option>
      );
  });

  


  return (
      <>
          <Form.Select id="catagoryDD" className="form-control w-100" onChange={handleCatagoryDDChange}>
          {options}
          </Form.Select>
          <label>
              {
                  
                  <label className="text-danger mt-3 text-small"> Please select a Catagory </label>
              }
          </label>
      </>
  );
}

  
return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Create Nomination</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Buzzboard Info</label>
                                                <Form.Control
                                                    placeholder="Enter Buzzboard Info"
                                                    type="text"
                                                    required="{true}"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,buzzboardInfo: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Location Id</label>
                                                <Form.Control
                                                    placeholder="Enter Location Id"
                                                    type="number"
                                                    required="{true}"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,locationId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Contest Id</label>
                                                <Form.Control
                                                    placeholder="Enter Contest Id"
                                                    type="number"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,contestId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Preloaded</label>
                                                <Form.Control
                                                    placeholder="Preloaded"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,preloaded: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      
                      <Form.Group>
                                 <label>Vote Id</label>
                                                <Form.Control
                                                    placeholder="Enter Vote Id"
                                                    type="text"
                                                   // value={user?.preferred_name}
                                                    onChange={(e) => { setUser({ ...user,voteId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                    <Form.Group>
                                <label> Choose a Catagory</label>

                                {getCatagoryDropdown()}
                            </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                    <Form.Group>
                                <label> Choose a Merchant</label>

                                {getMerchantDropdown()}
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

export default CreateNomination;
