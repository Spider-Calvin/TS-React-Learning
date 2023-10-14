import { useReducer } from 'react';

type statetype = { count: number };
type actiontype = { type : 'INCREMENT', payload?: number} |
{ type : 'DECREMENT', payload?: number} 

// Reducer function
const counterReducer = (state:statetype, action:actiontype) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const App = () => {
  // Define initial state and get the dispatch function
  const initialState:statetype = { count: 0 };
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};

export default App;