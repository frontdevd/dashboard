import React from 'react'
import {NavLink} from 'react-router-dom';

const Registration = () => {
  return (
    <div className='auth-wrapper'>
      <div className='auth-content'>
        <div className='card'>
          <div className='card-body text-center'>
            <div className='mb-4'>
              <i className='feather icon-user-plus auth-icon'/>
            </div>
            <h3 className='mb-4'>Sign up</h3>
            <div className='input-group mb-3'>
              <input type='text' className='form-control' placeholder='Username'/>
            </div>
            <div className='input-group mb-3'>
              <input type='email' className='form-control' placeholder='Email'/>
            </div>
            <div className='input-group mb-4'>
              <input type='password' className='form-control' placeholder='password'/>
            </div>
            <div className='form-group text-left'>
              <div className='checkbox checkbox-fill d-inline'>
                <input type='checkbox' name='checkbox-fill-2' id='checkbox-fill-2'/>
                <label htmlFor='checkbox-fill-2' className='cr'>Send me the <a href='#'> Newsletter</a> weekly.</label>
              </div>
            </div>
            <button className='btn btn-primary shadow-2 mb-4'>Sign up</button>
            <p className='mb-0 text-muted'>Allready have an account? <NavLink to='/auth/signin-1'>Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registration
