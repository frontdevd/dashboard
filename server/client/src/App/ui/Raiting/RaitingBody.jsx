import React from 'react'

const RaitingBody = ({head}) => {
  return (
    <div className='col-6'>
      <h2 className='f-w-300 d-flex align-items-center float-left m-0'>{head}<i
        className='fa fa-star f-10 m-l-10 text-c-yellow'/></h2>
    </div>
  )
}

export default RaitingBody
