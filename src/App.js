import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/slice/counterSlice';
import styled from 'styled-components';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const Button  = styled.button({
    background : 'red',
  })

  return (
    <div>
      <div>
        <Button
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
          >
            Increment
          </Button>
          <span>{count}</span>
          <Button
          aria-label='Increment value'
          onClick={() => dispatch(decrement())}
          >
            Decrement
          </Button>
      </div>
    </div>
  );
}

export default App;
