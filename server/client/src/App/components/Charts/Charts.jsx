import React from 'react'
import {Row} from 'react-bootstrap'

import Bar from './Chart/Bar'
import Multi from './Chart/Multi'
import Pie from './Chart/Pie'

const Charts = () => {
  return (
    <Row>
      <Bar col='6'/>
      <Pie col='6'/>
      <Multi col='12'/>
    </Row>
  );
};

export default Charts;
