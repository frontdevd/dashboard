import React from 'react';
import avatar from "../../../assets/images/user/default_user.png";
import {Link} from "react-router-dom";

const CustomTabItem = () => {
    return (
        <div className='media friendlist-box align-items-center justify-content-center m-b-20'>
            <div className='m-r-10 photo-table'>
                <Link to='#'>
                    <img className='rounded-circle' style={{width: '40px'}} src={avatar} alt='activity-user'/>
                </Link>
            </div>
            <div className='media-body'>
                <h6 className='m-0 d-inline'>Silje Larsen</h6>
                <span className='float-right d-flex  align-items-center'><i
                    className='fa fa-caret-up f-22 m-r-10 text-c-green'/>3784</span>
            </div>
        </div>
    );
};

export default CustomTabItem;
