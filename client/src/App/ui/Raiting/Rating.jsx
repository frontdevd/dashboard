import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import RaitingBody from "./RaitingBody";
import RaitingItem from "./RaitingItem";

const Rating = ({md, xl}) => {
  return (
    <Col md={md} xl={xl}>
      <Card>
        <Card.Header>
          <Card.Title as='h5'>Rating</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <RaitingBody head={4.7}/>
          </Row>
          <Row>
            <RaitingItem star={4} count={145} height={'6px'} width={'70%'}/>
            <RaitingItem star={5} count={124} height={'6px'} width={'50%'}/>
            <RaitingItem star={5} count={124} height={'6px'} width={'65%'}/>
            <RaitingItem star={5} count={124} height={'6px'} width={'10%'}/>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Rating;
