import React from 'react'
import {Link} from "react-router-dom";

const SidebarHead = (props) => {
    let toggleClass = ['mobile-menu']
    if (props.collapseMenu) {
        toggleClass = [...toggleClass, 'on']
    }

    return (
        <>
            <div className='navbar-brand header-logo'>
                <Link to='#' className='logo'>
                    <span className='b-title'>Dashboard</span></Link>
            </div>
            <div>
                <Link to='#'
                   className={toggleClass.join(' ')}
                   id='mobile-collapse'
                   onClick={props.onToggleNavigation}><span/></Link>
            </div>
        </>
    )
}

export default SidebarHead
