import React, {useState} from 'react'
import SidebarHead from './SidebarHead'
import SidebarContent from './SidebarContent'
import navigation from '../../../menu'
import Outside from './Outside'
import {useDispatch, useSelector} from 'react-redux'
import * as actionTypes from '../../../redux/constans'
import windowSize from 'react-window-size'

const Sidebar = (props) => {
  const collapseMenu = useSelector(state => state.dashboard.collapseMenu)
  // const layoutType = useSelector(state => state.layoutType)

  const dispatch = useDispatch()
  const onToggleNavigation = () => {
    dispatch({type: actionTypes.COLLAPSE_MENU})
  }

  let navClass = [
    'pcoded-navbar',
  ]

  if (props.windowWidth < 992 && collapseMenu) {
    navClass = [...navClass, 'mob-open']
  } else if (collapseMenu) {
    navClass = [...navClass, 'navbar-collapsed']
  }

  // if (props.layoutType === 'dark') {
  //   document.body.classList.add('datta-dark')
  // } else {
  //   document.body.classList.remove('datta-dark')
  // }

  let navContent = (
    <div className='navbar-wrapper'>
      <SidebarHead collapseMenu={collapseMenu} windowWidth={props.windowWidth}
                   onToggleNavigation={onToggleNavigation}/>
      <SidebarContent navigation={navigation.items}/>
    </div>
  )
  if (props.windowWidth < 992) {
    navContent = (
      <Outside>
        <div className='navbar-wrapper'>
          <SidebarHead
            collapseMenu={collapseMenu}
            windowWidth={props.windowWidth}
            onToggleNavigation={onToggleNavigation}
          />
          <SidebarContent navigation={navigation.items}/>
        </div>
      </Outside>
    )
  }

  return (
    <nav className={navClass.join(' ')}>
      {navContent}
    </nav>
  )
}

export default Sidebar
