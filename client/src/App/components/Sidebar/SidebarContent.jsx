import React from 'react'
import SidebarItemGroup from './SidebarItemGroup'
import PerfectScrollbar from 'react-perfect-scrollbar'

const SidebarContent = (props) => {

  const navItems = props.navigation.map(item => {
      return <SidebarItemGroup
        key={item.id} group={item}/>
    }
  )

  return (
    <div className='navbar-content datta-scroll'>
      <PerfectScrollbar>
        <ul className='nav inner-navbar'>
          {navItems}
        </ul>
      </PerfectScrollbar>
    </div>
  )
}

export default SidebarContent
