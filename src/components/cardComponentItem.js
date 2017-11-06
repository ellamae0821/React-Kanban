import React from 'react';
import {Link} from 'react-router-dom';

const CardComponentItem = ({id, title, priority, status,  created_by, assigned_to}) => {
  return (
    <Link to={`/${id}`}>
      <div className='eachCard'>
        <ol className='eachCardoL'>
          <b>Card-Id:</b>{id} <br/>
          <b>Title:</b>{title} <br/>
          <b>Created By:</b>{created_by} <br/>
          <b>Assigned To:</b>{assigned_to} <br/>
          <b>Priority:</b> {priority} <br/>
          <b>Status:</b> {status} <br/>
        </ol>
      </div>
    </Link>
  )
}




export default CardComponentItem;