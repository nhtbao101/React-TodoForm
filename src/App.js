import { useState } from "react";
import "./App.css";
import TodoList from "./components/Todolist/index";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Hello i'm from Vie" },
    { id: 2, title: "This is my ecommerce" },
    { id: 3, title: "Trump would become to the president" },
  ]);

  const removoList = (todo) => {
    const newList = [...todoList];
    const index = newList.findIndex((e) => todo.id === e.id);
    console.log(index);
    newList.splice(index, 1);
    setTodoList(newList);
  };

  return (
    <div className="App">
      <TodoList todos={todoList} onTodoClick={removoList} />
    </div>
  );
}

export default App;
