import React,{useState,useEffect} from "react";
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

import { useParams } from "react-router-dom";
import $ from 'jquery';

function EditNomination() {
  
  const [refresh, setRefresh] = useState(true);

  const initialNomination = 
  {
    
    "buzzboard_info": "",
    "location_id": "",
    "contest_id": "",
    "preloaded": "",
    "vote_id": "",
    "catagory_id": "",
    "merchant_id": ""
  
}

  const [nomination, setNomination] = useState(initialNomination);

  const [nnomination, setNNomination] = useState();

  let params = useParams();
  const history = useHistory();

  

useEffect(()=>{
  if (refresh) {

  axios.get('/nominations/'+ params.id).
  then(function (response){
    setRefresh(false); 
    setNomination(response.data)
  })
  }
},[nomination])



const handleFormSubmit = (e) => {
  debugger;
  e.preventDefault(); 
  console.log(nnomination)
  axios.patch('/nominations/'+params.id,nnomination).then
  (res =>  
    {
      if(!res.error && nnomination !=undefined)
      {
    alert("Record Edit Successfully")
    history.push("/admin/nominationlist");
      }
      else
      {
        alert("Some thing went wrong"+ res.error)
      }
    }
  )
}


const initialCatagories = [{id:1,name:"Catagory1",salesid:1}]


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
  const id = $(`#merchantDD option[value="${e.target.value}"]`).attr('data-id');
  setNNomination({ ...nnomination, merchantId: id })

}

const getMerchantDropdown = () => {
  
  var m = merchants.filter(x => x.id == nomination.merchant_id)[0]
  var options;
  if( m != undefined)
  {
   options = merchants.map(u => {
      
    return (
       m.name == u.name ? <option className="w-100" key={m.id} selected>{m.name}</option> :
        <option className="w-100" key={u.id} value={u.id} data-id={u.id}>{u.name}</option>
        
        );
  });
  }
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
  setNNomination({ ...nnomination, catagoryId: id })

}

const getCatagoryDropdown = () => {
  var c = catagories.filter(x => x.id == nomination.catagory_id)[0]
  var options;
  if( c != undefined)
  {
 options = catagories.map(u => {
      return (
        c.name  == u.name ?  <option className="w-100" key={c.id} selected >{c != undefined ? c.name : ""}</option>  :
          <option className="w-100" key={u.id} data-id={u.id} value={u.id}>{u.name}</option>
      );
  });
}
  return (
      <>
          <Form.Select  id="catagoryDD" className="form-control w-100" onChange={handleCatagoryDDChange}>
              
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
                <Card.Title as="h4">Edit Nomination</Card.Title>
              </Card.Header>
              <Card.Body>
              <Form onSubmit={handleFormSubmit}>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Buzzboard Info
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Buzzboard Info"
                                                    type="text"
                                                    required="{true}"
                                                    defaultValue={nomination?.buzzboard_info}
                                                    onChange={(e) => { setNNomination({ ...nnomination, buzzboardInfo: e.target.value  }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row>
                  <Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Location
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Location"
                                                    type="number"
                                                    required="{true}"
                                                    defaultValue={nomination?.location_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, locationId: e.target.value }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Contest
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Contest"
                                                    type="number"
                                                    defaultValue={nomination?.contest_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, contestId: e.target.value || null }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Preloaded
                                                </label>
                                                <Form.Control
                                                    placeholder="Enter Preloaded"
                                                    type="text"
                                                    defaultValue={nomination?.preloaded}
                                                    onChange={(e) => { setNNomination({ ...nnomination, preloaded: e.target.value || null }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
                    <Col className="pr-1" md="8">
                      <Form.Group>
                                                <label>
                                                Vote
                                                </label>
                                                <Form.Control
                                                    placeholder="Vote"
                                                    type="number"
                                                    defaultValue={nomination?.vote_id}
                                                    onChange={(e) => { setNNomination({ ...nnomination, voteId: e.target.value || null }) }}
                                                ></Form.Control>
                                                {/* {error.preferredNameError && (<label className='text-danger'>{error.preferredNameErrorMessage}</label>)} */}
                                            </Form.Group>
                    </Col>  
                  </Row><Row>
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

export default EditNomination;
