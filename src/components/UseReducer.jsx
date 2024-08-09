import { useState } from 'react';

const UseReducer = () => {
  const [count, setCount] = useState(0);
  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => count > 0 && setCount(count - 1)}>Decrement</button> {/* Prevents count from going negative */}
      <button onClick={() => setHidden(!hidden)}>Hide</button>
      {hidden ? <h1>Hidden</h1> : <h1>Not Hidden</h1>}
    </div>
  );
}

export default UseReducer;
