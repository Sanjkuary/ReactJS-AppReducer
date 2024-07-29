import './App.css';
import Header from './components/Header';
import { useReducer } from 'react';

const recuder = (state, action) => {
  if(action.type === "INC") {
    return state +2;
  }else if (action.type === "DEC"){
    return state -2;
  } else if (action.type === "MUL") {
    return state *2;
  }
  return state;
}

function App() {
  const [state, dispatch] = useReducer(recuder, 0);
  return (
    <div className='App'>
      <Header />
      <h1>{state}</h1>
      <button className='btn' onClick={() => dispatch({type: "INC"})}>Increment</button>
      <button className='btn' onClick={() => dispatch({type: "DEC"})}>Decrement</button>
      <button className='btn' onClick={() => dispatch({type: "MUL"})}>Multiplication</button>
      </div>
  );
}

export default App;
