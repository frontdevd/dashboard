import React from 'react'
import {Link} from "react-router-dom";

const UserItem = ({width, avatar, date, reject, approve, text}) => {
  return (
    <tr className='unread'>
      <td><img className='rounded-circle' style={{width: width}} src={avatar} alt='activity-user'/></td>
      <td>
        <p className='m-0'>{text}</p>
      </td>
      <td>
        <h6 className='text-muted'><i className='fa fa-circle text-c-green f-10 m-r-15'/>{date}</h6>
      </td>
      <td><Link to='#' className='label theme-bg2 text-white f-12'>{reject}</Link>
        <Link to='#' className='label theme-bg text-white f-12'>{approve}</Link></td>
    </tr>
  );
};

export default UserItem
