import React, {useEffect, useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import avatar from '../../../assets/images/user/default_user.png'
import {useDispatch, useSelector} from 'react-redux'
import {THEME_MODE} from '../../../redux/constans'

const Menu = ({rtlLayout}) => {
  const themeMode = useSelector(state => state.dashboard.themeMode)
  let [theme, setTheme] = useState(themeMode)
  const dispatch = useDispatch()

  useEffect(() => {
    document.body.classList.add(theme)
  }, [theme])

  const themeModeHandler = () => {
    document.body.classList.remove('light', 'dark')
    theme = theme === 'light' ? theme = 'dark' : theme = 'light'
    setTheme(theme)
    document.body.classList.add(theme)
    dispatch({type: THEME_MODE, payload: theme})
    localStorage.setItem('theme', theme)
  }

  return (
    <ul className='navbar-nav ml-auto'>

      <li>
        <button
          onClick={themeModeHandler}
          className="btn btn-primary shadow-2 mb-4 theme-btn">Theme: {theme}</button>
      </li>


      <li>
        <Dropdown alignRight={!rtlLayout}>
          <Dropdown.Toggle variant={'link'} id='dropdown-basic'>
            <i className='icon feather icon-bell'/>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight className='notification'>
            <div className='noti-head'>
              <h6 className='d-inline-block m-b-0'>Notifications</h6>
              <div className='float-right'>
                <a href='#'>clear all</a>
              </div>
            </div>
            <ul className='noti-body'>
              <li className='n-title'>
                <p className='m-b-0'>NEW</p>
              </li>
              <li className='notification'>
                <div className='media'>
                  <img className='img-radius' src={avatar} alt='Generic placeholder'/>
                  <div className='media-body'>
                    <p><strong>John Doe</strong><span className='n-time text-muted'><i
                      className='icon feather icon-clock m-r-10'/>30 min</span></p>
                    <p>New ticket Added</p>
                  </div>
                </div>
              </li>
              <li className='notification'>
                <div className='media'>
                  <img className='img-radius' src={avatar} alt='Generic placeholder'/>
                  <div className='media-body'>
                    <p><strong>Joseph William</strong><span className='n-time text-muted'><i
                      className='icon feather icon-clock m-r-10'/>30 min</span></p>
                    <p>Prchace New Theme and make payment</p>
                  </div>
                </div>
              </li>
            </ul>
            <div className='noti-footer'>
              <a href='#'>show all</a>
            </div>
          </Dropdown.Menu>
        </Dropdown>
      </li>
      <li>
        <Dropdown alignRight={!rtlLayout} className='drp-user'>
          {/*<NavLink to='/'>logout</NavLink>*/}
          <Dropdown.Toggle variant={'link'} id='dropdown-basic'>
            <i className='icon feather icon-settings'/>
          </Dropdown.Toggle>
          <Dropdown.Menu alignRight className='profile-notification'>
            <div className='pro-head'>
              <img src={avatar} className='img-radius' alt='User Profile'/>
              <span>Username</span>
            </div>
            <ul className='pro-body'>
              <li><a href='#' className='dropdown-item'><i className='feather icon-settings'/> Settings</a></li>
              <li><a href='#' className='dropdown-item'><i className='feather icon-user'/> Profile</a></li>
              <li><a href='#' className='dropdown-item'><i className='feather icon-mail'/> Log out </a></li>
            </ul>
          </Dropdown.Menu>
        </Dropdown>
      </li>
    </ul>
  )
}

export default Menu
