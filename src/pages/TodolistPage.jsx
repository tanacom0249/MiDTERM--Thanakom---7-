import React from "react";
import { useEffect, useState } from "react";
import axios, { Axios } from "axios";

function TodolistPage() {
  const [todos, setTodos] = useState([]);

  const [task, setTake] = useState("");
  const [longing, setLonding] = useState(false);

  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const fetchTodos = async () => {
    try {
      setLonding(true);
      const res = await axios(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/7",
      );
      console.log(res.data);
      setTodos(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLonding(false);
    }
  };

  const addTask = async () => {
    if (!task) return;
    try {
      setLonding(true);

      const res = await axios.post(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/7",
        {
          content: task,
        },
      );

      // const newTodo = await res.json();
      const newTodo = res.data;
      setTodos([...todos, newTodo]);
      setTake("");
      setLonding(false);
    } catch (err) {
      console.error("Add error :", err);
    }
  };

  const toggleTask = async (id, currentStatus) => {
    try {
      await axios(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/7",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            done: !currentStatus,
          }),
        },
      );

      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, done: !currentStatus } : todo,
        ),
      );
    } catch (err) {
      console.error("Toggle error :", err);
    }
  };

  const saveEdit = async (id) => {
    try {
      await axios(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/7",
        {
          method: "PUT",
        },
      );
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, content: editText } : todo,
        ),
      );
      setEditingId(null);
    } catch (err) {
      console.error("Save error :", err);
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(
        "https://drive-accessible-pictures-send.trycloudflare.com/todos/7",
        {
          method: "DELETE",
        },
      );
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      console.error("Delete error :", err);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="bg-slate-900 p-8 rounded-2xl shadow-xl w-96 text-white">
        <h1 className="text-3xl font-bold mb-6">Todo List</h1>
        <div className="flex mb-4">
          <input
            type="text"
            value={task}
            onChange={(e) => setTake(e.target.value)}
            placeholder="new task"
            className="flex-1 p-2 rounded-l-lg bg-slate-700 focus:outline-none"
          />

          <button
            onClick={addTask}
            className="bg-blue-500 px-4 rounded-l-lg hover:bg-blue-600"
          >
            Add
          </button>
        </div>
        {longing && <p className="text-tm text-slate-400">Loading...</p>}
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center justify-between bg-slate-800 p-3 rounded-lg"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => toggleTask(todo.id, todo.done)}
                />
                <span
                  className={todo.done ? "line-through text-slate-400" : ""}
                >
                  {todo.content}
                </span>
              </div>

              <div className="flex gap-2 ml-2">
                {editingId === todo.id ? (
                  <>
                    <button
                      onClick={() => saveEdit(todo.id)}
                      className="text-green-400 text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="text-slate-400 text-sm"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditingId(todo.id);
                        setEditText(todo.text);
                      }}
                      className="text-blue-400 text-sm"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTask(todo.id)}
                      className="text-red-400 text-sm"
                    >
                      X
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodolistPage;
