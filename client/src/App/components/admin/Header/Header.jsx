import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {COLLAPSE_MENU} from "../../../../redux/constans";
import Menu from "../../Menu/Menu";

const Header = () => {

  const collapseMenu = useSelector(state => state.collapseMenu)
  const headerBackColor = useSelector(state => state.headerBackColor)
  const headerFixedLayout = useSelector(state => state.headerFixedLayout)
  const rtlLayout = useSelector(state => state.rtlLayout)

  let toggleClass = ['mobile-menu']
  if (collapseMenu) {
    toggleClass = [...toggleClass, 'on']
  }

  let headerClass = ['navbar', 'dropdown-header', 'navbar-expand-lg', headerBackColor]
  if (headerFixedLayout) {
    headerClass = [...headerClass, 'headerpos-fixed']
  }

  const dispatch = useDispatch()
  const onToggleNavigation = () => dispatch({type: COLLAPSE_MENU})

  return (
    <header className={headerClass.join(' ')}>
      <div className='m-header'>
        <a className={toggleClass.join(' ')}
           id='mobile-collapse1' href='#'
           onClick={onToggleNavigation}><span/></a>
        <a href='#' className='logo'>
        </a>
      </div>
      <a className='mobile-menu'
         id='mobile-header'
         href='/'><i className='feather icon-more-horizontal'/></a>
      <div className='collapse navbar-collapse'>
        <Menu rtlLayout={rtlLayout}/>
      </div>
    </header>
  )
}

export default Header
