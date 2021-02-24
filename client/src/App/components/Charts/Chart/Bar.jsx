import React from 'react';
import NVD3Chart from 'react-nvd3';
import {Card, Col} from 'react-bootstrap';

const data = [
  {
    key: 'Data',
    values: [{
      'label': 'A',
      'value': -20,
      'color': '#3ebfea'
    }, {
      'label': 'B',
      'value': 10,
      'color': '#04a9f5'
    }, {
      'label': 'C',
      'value': 50,
      'color': '#ff8a65'
    }, {
      'label': 'D',
      'value': 196.1,
      'color': '#1de9b6'
    }, {
      'label': 'E',
      'value': 500.36,
      'color': '#4C5667'
    }, {
      'label': 'F',
      'value': -9,
      'color': '#69CEC6'
    }, {
      'label': 'G',
      'value': -10,
      'color': '#a389d4'
    }, {
      'label': 'H',
      'value': -50,
      'color': '#FE8A7D'
    }]
  }
]

const Bar = ({col}) => {
  return (
    <Col md={col}>
      <Card>
        <Card.Header>
          <Card.Title as='h5'>Bar Chart</Card.Title>
        </Card.Header>
        <Card.Body>
          <NVD3Chart tooltip={{enabled: true}}
                     type='discreteBarChart' datum={data}
                     x='label' y='value' height={300} showValues/>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Bar
