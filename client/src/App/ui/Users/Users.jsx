import React from 'react'
import {Card, Col, Table} from "react-bootstrap";
import avatar from "../../../assets/images/user/default_user.png";
import UserItem from "./UserItem";

const Users = ({md, xl}) => {
  return (
    <Col md={md} xl={xl}>
      <Card className='Recent-Users'>
        <Card.Header>
          <Card.Title as='h5'>Recent Users</Card.Title>
        </Card.Header>
        <Card.Body className='px-0 py-2'>
          <Table responsive hover>
            <tbody>
            <UserItem width='40px' avatar={avatar} date='11.02.2020' reject='Reject' approve='Approve'
                      text='Lorem Ipsum is simply dummy text'/>
            <UserItem width='40px' avatar={avatar} date='11.03.2020' reject='Reject' approve='Approve'
                      text='Lorem Ipsum is simply dummy text'/>
            <UserItem width='40px' avatar={avatar} date='11.04.2020' reject='Reject' approve='Approve'
                      text='Lorem Ipsum is simply dummy text'/>
            <UserItem width='40px' avatar={avatar} date='11.05.2020' reject='Reject' approve='Approve'
                      text='Lorem Ipsum is simply dummy text'/>
            <UserItem width='40px' avatar={avatar} date='11.06.2020' reject='Reject' approve='Approve'
                      text='Lorem Ipsum is simply dummy text'/>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Users
