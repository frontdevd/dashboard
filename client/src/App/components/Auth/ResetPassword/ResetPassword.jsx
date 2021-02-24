import React from 'react'
import {NavLink} from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-content">
        <div className="card">
          <div className="card-body text-center">
            <div className="mb-4">
              <i className="feather icon-unlock auth-icon"/>
            </div>
            <h3 className="mb-4">Reset</h3>
            <div className="input-group mb-3">
              <input type="email" className="form-control" placeholder="Email"/>
            </div>
            <button className="btn btn-primary shadow-2 mb-4">Reset</button>
            <p className="mb-0 text-muted">Login ? <NavLink to="/login">Login</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword
