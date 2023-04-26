import { decrementCounter, incrementCounter } from '@/redux/actions/counterActions';
import React from 'react'
import { connect } from 'react-redux';

function redux(props) {
  return (
    <div className='reduxmain hero'>
      <button onClick={props.incrementCounter} className='btn-get-started'>Increment</button>
      <button onClick={props.decrementCounter} className='btn-get-started'>Decrement</button>
      <h1>{props.counter}</h1>
    </div>
  )
}
const mapStateToProps = state => ({
  counter: state.counter.value
});

const mapDispatchToProps = {
  incrementCounter: incrementCounter,
  decrementCounter: decrementCounter,
};

export default connect(mapStateToProps, mapDispatchToProps)(redux);