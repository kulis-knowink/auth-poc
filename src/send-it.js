import React from 'react';
import { connect } from 'react-redux';
import { sendIt } from './redux/actions';


export default connect()(({dispatch}) => {

  const onClick = () => dispatch(sendIt());

  return (
    <button onClick={onClick}>SEND IT</button>
  )
})
