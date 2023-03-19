import { useEffect, useState } from "react";
import { fetchTodoById, fetchTodoList } from "./requests";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    const params = {
      _limit: limit,
    };

    fetchTodoList(params).then((data) => {
      setTodoList(data);
    });
  }, [limit]);

  useEffect(() => {
    fetchTodoById(1).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="App">
      <input
        type="number"
        value={limit}
        onChange={(e) => setLimit(e.target.value)}
      />
      {todoList.map((item) => (
        <div key={item.id}>{`${item.id} ${item.title} ${item.author} `}</div>
      ))}
    </div>
  );
}

export default App;
