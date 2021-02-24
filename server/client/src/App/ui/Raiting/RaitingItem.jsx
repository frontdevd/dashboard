import React from 'react'

const RaitingItem = ({star, count, height, width}) => {
  return (
    <div className='col-xl-12'>
      <h6 className='align-items-center float-left'>
        <i className='fa fa-star f-10 m-r-10 text-c-yellow'/>{star}</h6>
      <h6 className='align-items-center float-right'>{count}</h6>
      <div className='progress m-t-30 m-b-20' style={{height: height}}>
        <div className='progress-bar progress-c-theme' role='progressbar' style={{width: width}}
             aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'/>
      </div>
    </div>
  );
};

export default RaitingItem
