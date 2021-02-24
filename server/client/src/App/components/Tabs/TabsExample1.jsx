import React from 'react'
import {Col, Tab} from "react-bootstrap";
import Tabs from "react-bootstrap/Tabs";

const TabsExample1 = () => {

  const content = () => {
    return (
      'Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua'
    )
  }

  return (
    <>
      <h5>Basic Tabs</h5>
      <hr/>
      <Tabs defaultActiveKey='home'>
        <Tab eventKey='home' title='HOME'>
          <p>{content()}</p>
        </Tab>
        <Tab eventKey='profile' title='PROFILE'>
          <p>{content()}</p>

        </Tab>
        <Tab eventKey='contact' title='CONTACT'>
          <p>{content()}</p>
        </Tab>
      </Tabs>
    </>
  )
}

export default TabsExample1
