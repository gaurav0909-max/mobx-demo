import React, { useState } from "react";
import store from "./store";
import TodoList from "./TodoList";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      store.addTodo(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Todo App
        </h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter your task..."
          />
          <button
            onClick={handleAddTodo}
            className="p-3 bg-blue-500 text-white font-medium rounded-r-md hover:bg-blue-600 focus:outline-none"
          >
            Add
          </button>
        </div>
        <TodoList />
      </div>
    </div>
  );
};

export default App;
