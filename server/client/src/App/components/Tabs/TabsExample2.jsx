import React from 'react'
import Tabs from "react-bootstrap/Tabs";
import { Tab} from "react-bootstrap";

const TabsExample2 = () => {
  const content = () => {
    return (
      'Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro\n' +
      '            mlkshk vice blog. Raw denim you probably haven\'t heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua'
    )
  }

  return (
    <>
      <h5 className='mt-4'>Basic Pills</h5>
      <hr/>
      <Tabs variant='pills' defaultActiveKey='home' className='mb-3'>
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
  );
};

export default TabsExample2
