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

  // Handle Enter key press to add todo
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-3xl p-8 w-full max-w-lg space-y-6">
        <h1 className="text-4xl font-semibold text-center text-gray-800">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyPress} // Listen for the Enter key press
            className="flex-1 p-4 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 shadow-md transition duration-300"
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTodo}
            className="p-4 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          >
            Add
          </button>
        </div>

        {/* Todo List Section */}
        <div className="space-y-4">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default App;
