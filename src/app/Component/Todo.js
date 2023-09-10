"use client"



import React, { useState,useEffect } from "react";


function generateId() {
  return Math.floor(Math.random() * 10);
}

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container  w-[100%] h-[30rem]  bg-blue-300 flex items-center justify-center flex-col">
     <div className="h-[20rem] gap-y-2">
     <div className="inset-x-0 top-0">
     <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add Todo..."
        className="bg-purple-400 text-black p-2 border-black border-2 shadow-xl shadow-black mb-10 rounded-xl"
        autoFocus
      />

      <button onClick={handleSubmit} className="hover:cursor-pointer border-black border-2 rounded-3xl p-2">Submit</button>
     </div>

      <ul className="todos-list ">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo flex justify-between bg-yellow-300 w-52 gap-y-2  border-black m-2 border-2 rounded-2xl p-2">
            <span className="p-2">{text}</span>
            <button className="close hover:cursor-pointer " onClick={() => removeTodo(id)} >
              X
            </button>
          </li>
        ))}
        </ul>
     </div>
    </div>
  );
}

export default Todo;
