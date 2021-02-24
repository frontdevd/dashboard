import React from 'react';
import NVD3Chart from 'react-nvd3';
import {Card, Col} from "react-bootstrap";

const data = [
  {key: "One", y: 29, color: "#ff8a65"},
  {key: "Two", y: 0, color: "#f4c22b"},
  {key: "Three", y: 32, color: "#04a9f5"},
  {key: "Four", y: 196, color: "#3ebfea"},
  {key: "Five", y: 2, color: "#4F5467"},
  {key: "Six", y: 98, color: "#1de9b6"},
  {key: "Seven", y: 13, color: "#a389d4"},
  {key: "Eight", y: 5, color: "#FE8A7D"}
];

const Pie = (props) => {
  return (
    <Col md={props.col}>
      <Card>
        <Card.Header>
          <Card.Title as="h5">Pie Chart</Card.Title>
        </Card.Header>
        <Card.Body className="text-center">
          <NVD3Chart id="chart" height={300} type="pieChart" datum={data} x="key" y="y"/>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Pie;
