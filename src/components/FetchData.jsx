import { useState, useEffect } from 'react';

const FetchData = () => {
  const [text, setText] = useState('posts');
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [text]); // Add 'text' to the dependency array

  return (
    <div>
      <button onClick={() => setText('posts')}>Posts</button>
      <button onClick={() => setText('users')}>Users</button>
      <button onClick={() => setText('comments')}>Comments</button>
      {data?.map((item, index) => (
        <pre key={index}>{JSON.stringify(item, null, 2)}</pre>
      ))}
    </div>
  );
};

export default FetchData;
