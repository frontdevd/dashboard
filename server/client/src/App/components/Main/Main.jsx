import React from 'react'
import {Row} from 'react-bootstrap'
import Sales from '../../ui/Sales'
import Rating from '../../ui/Raiting/Rating'
import {Bar, Multi} from '../index'
import CustomTab from "../../ui/CustomTabs/CustomTab"
import Users from "../../ui/Users/Users"

const Main = () => {
  return (
    <Row>
      <Bar col='6'/>
      <Multi col='6'/>
      <Sales title='Sales' percent='70%' height='7px' width='50%' price='249'/>
      <Sales title='Sales' percent='50%' height='7px' width='50%' price='20'/>
      <Sales title='Sales' percent='20%' height='7px' width='50%' price='145'/>
      <Users md={12} xl={12}/>
      <Rating md={6} xl={4}/>
      <CustomTab md={6} xl={8}/>
    </Row>
  )
}

export default Main
