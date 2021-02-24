import React from 'react'
import {NavLink} from 'react-router-dom'

const SidebarItem = (props) => {
  let itemTitle = props.item.title
  if (props.item.icon) {
    itemTitle = <span className='mtext'>{props.item.title}</span>
  }

  let subContent = (
    <NavLink to={props.item.url} className='nav-link' exact={true}>
      {props.item && <span className='micon'><i className={props.item.icon}/></span>}
      {itemTitle}
    </NavLink>
  )
  let mainContent = ''
  if (props.windowWidth < 992) {
    mainContent = (
        <div className={props.item.classes} onClick={props.onItemClick}>{subContent}</div>
    )
  } else {
    mainContent = (
      <div className={props.item.classes}>{subContent}</div>
    )
  }

  return (
    <>
      {mainContent}
    </>
  )
}

export default SidebarItem
