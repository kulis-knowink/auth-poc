import React from 'react';
import { connect } from 'react-redux';
import { updateIt } from './redux/actions';

const mapStateToProps = state => ({
  lastSend: state.sendIt[state.sendIt.length - 1]
})

export default connect(mapStateToProps)(({dispatch, lastSend}) => {

  const onClick = () => {
    dispatch(updateIt(lastSend.id))
  };

  return (
    <button onClick={onClick}>UPDATE IT</button>
  )
})
