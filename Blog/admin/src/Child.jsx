import React, { useContext, memo } from 'react';
import { AppContext } from './context-manager';

export default memo((props = {}) => {
  const { setNumberOne, setNumberTwo, setCount } = useContext(AppContext);

  return (
    <div>
      <p>numberOne is：{props.numberOne}</p>
      <p>numberTwo is：{props.numberTwo}</p>
      <p>count is：{props.count}</p>
      <hr/>
      <div>
        <button onClick={() => { setNumberOne(props.numberOne + 1) }}>numberOne ++</button>
        <button onClick={() => { setNumberTwo(props.numberTwo + 1) }}>numberTwo ++</button>
        <button onClick={() => { setCount(props.numberTwo + props.numberOne) }}>numberOne + numberTwo</button>
      </div>
    </div>
  )
});