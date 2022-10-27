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

  const initialUserObject = {
    
      "buzzboardInfo": "",
      "locationId": 0,
      "contestId": 0,
      "preloaded": 0,
      "voteId": 0,
      "catagoryId": 0,
      "merchantId": 0
    
}

const [user, setUser] = useState(initialUserObject);

const [catagoryId, setcatagoryId] = useState(0);
const [merchantId, setmerchantId] = useState(0);


const handleFormSubmit = (e) => {
  e.preventDefault();
  user.catagoryId = catagoryId;
  user.merchantId = merchantId;
  console.log("Nomination",user)
  
  axios.post('/nominations',user).then(()=>{
    alert("Record Added Successfully") 
    history.push("/admin/nominationlist");
  })

}




const initialMerchants = [{id:1,name:"merchants1",salesid:1}]

const [merchants, setMerchants] = useState(initialMerchants);


useEffect(()=>{
  if (refresh) {

  axios.get('/merchants').
  then(function (response){
    setRefresh(false); 
    setMerchants(response.data)
  })
  }
},[merchants])



const handleMerchantDDChange = (e) => {
  debugger;
  const id = $(`#merchantDD option[value="${e.target.value}"]`).attr('data-id');
  console.log('selected id', id);
  setmerchantId(id)
}


const getMerchantDropdown = () => {
  const options = merchants.map(u => {
      return (
          <option className="w-100" key={u.id} data-id={u.id} value={u.name}></option>
      );
  });

  return (
      <>

          <input className="form-control w-100" list="merchantDD" onChange={handleMerchantDDChange} />
          <datalist id="merchantDD">
              {options}
          </datalist>
          <label>
              {
                 
                  <label className="text-danger mt-3 text-small"> Please select a Merchant </label>
              }
          </label>
      </>
  );
}

  

const initialCatagories = [{id:1,name:"Catagory1",salesid:1}]

const [catagories, setCatagories] = useState(initialCatagories);


useEffect(()=>{
  if (refresh) {

  axios.get('/categories'
  ).then(function (response) {
    setRefresh(false); 
    setCatagories(response.data)
  })
}
})


const handleCatagoryDDChange = (e) => {
  const id = $(`#catagoryDD option[value="${e.target.value}"]`).attr('data-id');
  console.log('selected id', id);
  setcatagoryId(id);
}


const getCatagoryDropdown = () => {
  
  const options = catagories.map(u => {
      return (
          <option className="w-100" key={u.id} data-id={u.id} value={u.name}></option>
      );
  });

  return (
      <>

          <input className="form-control w-100" list="catagoryDD" onChange={handleCatagoryDDChange} />
          <datalist id="catagoryDD">
              {options}
          </datalist>
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
                                 <label>Location</label>
                                                <Form.Control
                                                    placeholder="Enter Location"
                                                    type="text"
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
                                 <label>Contest</label>
                                                <Form.Control
                                                    placeholder="Enter Contest"
                                                    type="text"
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
                                 <label>Vote</label>
                                                <Form.Control
                                                    placeholder="Enter Vote"
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
