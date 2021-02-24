import React from 'react'
import {Col, Row, Tabs} from "react-bootstrap";
import CustomTabItem from "./CustomTabItem";

const CustomTab = ({md, xl}) => {
  const content = Array(6)
    .fill()
    .map((el, idx) => <CustomTabItem key={idx}/>)

  return (
    <Col md={md} xl={xl} className='m-b-30'>
      <Tabs defaultActiveKey='today' id='uncontrolled-tab-example'>
        <CustomTab eventKey='today' title='Today'>
          {content}
        </CustomTab>
        <CustomTab eventKey='week' title='This Week'>
          {content}
        </CustomTab>
        <CustomTab eventKey='all' title='All'>
          {content}
        </CustomTab>
      </Tabs>
    </Col>
  );
};

export default CustomTab
