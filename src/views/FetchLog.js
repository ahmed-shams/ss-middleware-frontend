import React, { useState, useEffect } from "react";
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery';
import { useHistory, Link } from "react-router-dom";
import axios from '../axios-service';
import { SpinnerCircular } from 'spinners-react';
import { useParams } from "react-router-dom";
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

function FetchLogs() {


  const history = useHistory();

  const [logs, setLogs] = useState([]);
  const [refresh, setRefresh] = useState(true);
  const [loading, setLoading] = useState(true);
  let params = useParams();

  useEffect(() => {
    if (refresh) {

      setInterval(() => {
        axios.get("/logs/" + params.id).then(function (response) {
          setRefresh(false);
         
          setLogs(response.data);
          setLoading(false);
        });
       }, 10000);
    
    }

  }, [logs,refresh])

  if (loading)
  return (
    
      <div style={{height:'100%', display:'flex', justifyContent:'center'}}>
          <SpinnerCircular />
      </div>
  )
  else
  return (
    <>
    {logs.map((result) => {
      return <h2>
       {`${result.message}`}
      
      </h2>
    })}
    </>
  );
}

export default FetchLogs;
