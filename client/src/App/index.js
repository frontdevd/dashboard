import React, {useEffect, useState} from 'react'
import DashboardLayout from './layout/DashboardLayout'
import LoginLayout from "./layout/LoginLayout";
import {useDispatch, useSelector} from "react-redux";
import './app.scss'
import {auth, themeModes} from "../redux/actions/user";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import {THEME_MODE} from "../redux/constans";

const App = () => {
  const [loading, setLoading] = useState(true)
  const isAuth = useSelector(state => state.user.isAuth)
  const themeMode = useSelector(state => state.dashboard.themeMode)
  const dispatch = useDispatch()

  const themeModes =  () => {
    const getTheme = localStorage.getItem('theme', themeMode)
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(getTheme)
    dispatch({type: THEME_MODE, payload: getTheme})
  }


  useEffect(() => {
    dispatch(auth())
    themeModes()
    setTimeout(() => setLoading(false), 1000)
  }, [])

  // useEffect(()=> {
  //
  //   if(getTheme) {
  //     document.body.classList.remove('light', 'dark')
  //     document.body.classList.add(theme)
  //     setTheme(theme)
  //     dispatch({type: THEME_MODE, payload: theme})
  //   }
  // }, [])




  return (
    <>
      {loading
        ? <Loader
          className='loader'
          type="TailSpin"
          color="#007bff"
          height={60}
          width={60}
          timeout={1000}
        />
        : isAuth ? <DashboardLayout/> : <LoginLayout/>}
    </>
  )
}
export default App
