import React from 'react'
import {Col, Row} from 'react-bootstrap'
import TabsExample1 from "./TabsExample1";
import TabsExample2 from "./TabsExample2";

const TabsBlock = () => {
  return (
    <Row>
      <Col>
        <TabsExample1 />
        <TabsExample2 />
      </Col>
    </Row>
  )
}

export default TabsBlock
