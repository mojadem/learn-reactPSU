import { useState, useEffect } from "react";
import Header from "./Header";
import Todos from "./Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await res.json();

      console.log(data);
      setTodos(data);
    };

    getTodos();
  });

  return (
    <div className="App">
      <Header />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
