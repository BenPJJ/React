import React, { useState } from 'react';
import { connect } from 'dva';

const Compute = ({dispatch, compute}) => {

  const add = () => {
    if (addDisabled) {
      dispatch({ type: 'compute/add' });
      setAddDisabled(false);
    }
    setMark('+');
  }

  const reduce = () => {
    if (redDisabled) {
      dispatch({ type: 'compute/reduce' });
      setRedDisabled(false);
    }
    setMark('-');
  }

  const result = () => {
    dispatch({ type: 'compute/result' });
    setCount(compute.count);
    setMark(undefined);
    setAddDisabled(true);
    setRedDisabled(true);
  }

  const [ count, setCount ] = useState(compute.count);
  const [ mark, setMark ] = useState(undefined);
  const [ addDisabled, setAddDisabled ] = useState(true);
  const [ redDisabled, setRedDisabled ] = useState(true);

  return (
    <div>
      <h2>我是计算器</h2>
      <div>
        计算结果：{ count } { mark } { mark ? 1 : undefined }
      </div>
      <br/>
      <button onClick={add}>加 1</button>&nbsp;&nbsp;
      <button onClick={reduce}>减 1</button>
      <br/><br/>
      <button onClick={result}>结果 =</button>
    </div>
  )
}

const ComputeHandle = (compute) => {
  return compute;
}

export default connect(ComputeHandle)(Compute);