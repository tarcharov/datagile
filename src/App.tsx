import React from "react";
import "./App.css";
import InputField from "./components/InputField/InputField";
import TodoList from "./components/TodoList/TodoList";
import TodoFilters from "./components/TodoFilters/TodoFilters";

function App() {
  return (
    <div className="App">
      <InputField />
      <div className="todoWrapper">
        <div className="headerWrapper">
          <h3>Список Задач</h3>
        </div>
        <div className="contentWrapper">
          <TodoList />
          <TodoFilters></TodoFilters>
        </div>
      </div>
    </div>
  );
}

export default App;
