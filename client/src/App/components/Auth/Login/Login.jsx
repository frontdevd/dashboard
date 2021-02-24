import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import {useDispatch, useSelector} from "react-redux"
import '../errors.scss'
import { login} from "../../../../redux/actions/user";


const Login = () => {

  const isEmail = () => ({
    required: "Required email",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address"
    }
  })

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const {register, handleSubmit, errors} = useForm()
  const dispatch = useDispatch()
  const onLogin = () => dispatch(login(email, password))
  const responseError = useSelector(state => state.user.responseError)
  console.log();
  return (
    <div className='auth-wrapper'>
      <div className='auth-content'>
        <div className='card'>
          <div className='card-body text-center'>
            <div className='mb-4'>
              <i className='feather icon-unlock auth-icon'/>
            </div>
            <h3 className='mb-4'>Login</h3>
            <form onSubmit={handleSubmit(onLogin)}>
              <p className='form-error'>{errors.email && <span role="alert">{errors.email.message}</span>}</p>
              <div className='input-group mb-3'>
                <input
                  onInput={(event) => setEmail(event.target.value)}
                  value={email}
                  name="email"
                  ref={register(isEmail())}
                  type='email'
                  className='form-control'
                  placeholder='Email'/>
              </div>

              <p className='form-error'>{errors.password && <span role="alert">{errors.password.message}</span>}</p>
              <div className='input-group mb-4'>
                <input
                  onInput={(event) => setPassword(event.target.value)}
                  value={password}
                  ref={register({required: "Required password"})}
                  type='password'
                  name='password'
                  className='form-control'
                  placeholder='password'/>
              </div>
              <div className='form-group text-left'>
                <div className='checkbox checkbox-fill d-inline'>
                  <input type='checkbox' name='checkbox-fill-1' id='checkbox-fill-a1'/>
                  <label htmlFor='checkbox-fill-a1' className='cr'> Save credentials</label>
                </div>
              </div>
              <button className='btn btn-primary shadow-2 mb-4'>Login</button>

              {responseError && <div id='response-error'>{responseError}</div>}

            </form>
            <p className='mb-2 text-muted'>Forgot password? <NavLink to='/reset-password'>Reset</NavLink></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
