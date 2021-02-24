import React from 'react'

const Input = ({type, placeholder, value}) => {
  return (
    <div className='input-group mb-3'>
      {value && <input type={type} value={value} className='form-control' placeholder={placeholder}/>}
      {!value && <input type={type} className='form-control' placeholder={placeholder}/>}
    </div>
  );
};

export default Input
