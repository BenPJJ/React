import React, { useState } from 'react';
import { AppContext } from './context-manager';
import Child from './Child';

const Test = () => {
  const [ numberOne, setNumberOne ] = useState(0);
  const [ numberTwo, setNumberTwo ] = useState(0);
  const [ count, setCount ] = useState(0);

  return (
    <AppContext.Provider value={{ setNumberOne, setNumberTwo, setCount }}>			
    	<Child numberOne={numberOne} numberTwo={numberTwo} count={count}/>
    </AppContext.Provider>
  )
}

export default Test;