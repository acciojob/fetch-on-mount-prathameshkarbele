
import React,{ useState, useEffect } from "react";
import 'regenerator-runtime/runtime'
import './../styles/App.css';


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <h2>
            {item.id}. {item.title}
          </h2>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
