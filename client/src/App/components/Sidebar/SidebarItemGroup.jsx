import React from 'react'
import SidebarItem from './SidebarItem'

const SidebarItemGroup = (props) => {
  let navItems = ''
  if (props.group.children) {
    const groups = props.group.children
    navItems = Object.keys(groups).map(item => {
      return <SidebarItem
        key={groups[item].id}
        item={groups[item]}/>
    })
  }

  return (
      <li key={props.group.id}
          className='nav-item menu-caption'>
        <label>{props.group.title}</label>
      {navItems}</li>
  )
}

export default SidebarItemGroup
