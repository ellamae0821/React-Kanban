import React from 'react';

const cardComponentItem = ({id, title, priority, status,  createdBy, assignedTo}) => {
  return (

  <div className='eachBook'>
    <ol>
      <b>Card-Id:</b>{id} <br/>
      <b>Title:</b>{title} <br/>
      <b>Priority:</b>{priority} <br/>
      <b>Status:</b>{status} <br/>
      <b>Created By:</b>{createdBy} <br/>
      <b>Assigned To:</b>{assignedTo} <br/>
    </ol>
  </div>
  )
}

export default cardComponentItem;