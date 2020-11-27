import { useEffect, useState } from "react";
import queryString from "query-string";
import "./App.css";
import PageChange from "./components/Paganation";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/Todolist/index";
import SearchItem from "./components/SearchItem";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "Hello i'm from Vie" },
    { id: 2, title: "This is my ecommerce" },
    { id: 3, title: "Trump would become to the president" },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 50,
  });
  const [filter, setFilter] = useState({
    _limit: 10,
    _page: 1,
    title_like: "",
  });

  useEffect(() => {
    async function fetchUrl() {
      try {
        const paramsString = queryString.stringify(filter);
        const url = `https://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        console.log(url);
        const response = await fetch(url);
        const reponseJson = await response.json();
        console.log({ reponseJson });
        const { data } = reponseJson;
        setPostList(data);
        // setPagination(pagination);
      } catch (error) {
        return error;
      }
    }
    fetchUrl();
  }, [filter]);

  const removoList = (todo) => {
    const newList = [...todoList];
    const index = newList.findIndex((e) => todo.id === e.id);
    console.log(index);
    newList.splice(index, 1);
    setTodoList(newList);
  };

  const handleSubmit = (formValue) => {
    console.log(formValue);
    const newSubmitList = [...todoList];
    const newValue = { id: Math.random(0, 99), ...formValue };
    newSubmitList.push(newValue);
    setTodoList(newSubmitList);
  };

  const handlePageChange = (newPage) => {
    console.log("New page", newPage);
    setFilter({
      ...filter,
      _page: newPage,
    });
    setPagination((cur) => ({ ...cur, _page: newPage }));
  };

  const handleSearchSubmit = (searchValue) => {
    console.log("search value : ", searchValue);
    setFilter({
      ...filter,
      _page: 1,
      title_like: searchValue.q,
    });
  };
  return (
    <div className="App">
      <h1>Hello i'm waiting you from 6:AM</h1>
      {/* <Clock />
      <BetterClock /> */}
      <MagicBox />
      {/* <SearchItem onSubmit={handleSearchSubmit} />
      <PostList posts={postList} />
      <PageChange pagination={pagination} onPageChange={handlePageChange} /> */}
      {/* <TodoForm onSubmit={handleSubmit} />
      <TodoList todos={todoList} onTodoClick={removoList} /> */}
    </div>
  );
}

export default App;
