import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';

const initialState = {
  count: 0,
  step: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'reset':
      return { ...state, count: 0 };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: 'center', maxWidth: '400px', margin: 'auto' }}>
      <h2>Complex UseReducer Example</h2>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <div>
        <Button onClick={() => dispatch({ type: 'increment' })} variant="btn btn-primary">Increment</Button>&nbsp; &nbsp;
        <Button onClick={() => dispatch({ type: 'decrement' })} variant="btn btn-secondary">Decrement</Button>&nbsp; &nbsp;
        <Button onClick={() => dispatch({ type: 'reset' })}variant="btn btn-danger" >Reset</Button>&nbsp; &nbsp;
      </div>
      <br/> <br/>
      <div>
        <label>
          Set Step:
          <input
            type="number"
            value={state.step}
            onChange={(e) => dispatch({ type: 'setStep', payload: parseInt(e.target.value) || 1 })}
          />
          <br/>
        </label>
      </div>
    </div>
  );
};

export default UseReducerExample;
