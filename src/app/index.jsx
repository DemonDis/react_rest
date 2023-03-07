
import React, { useState } from 'react'
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const axiosGet = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then(res => {
      setData(res.data)
    })
    console.log('AXIOS', data)
  };

  return (
    <div className="App">
      REACT REST
      <button onClick={axiosGet}>GET</button>
      {
                data.map((item, index) => {
                    return <div key={index}>{item.postId} - {item.name}</div>
                })
            }
    </div>
  );
}

export default App;
