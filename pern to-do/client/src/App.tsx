import axios from "axios";
import { useState, useEffect } from "react";
import type { Todo } from "./types";
const API_URL = "http://localhost:3000/todos";
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTask, setNewTask] = useState("");
  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = async () => {
    try {
      const response = await axios.get<Todo[]>(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.log("Error fetching todos: ", error);
      setTodos([]);
    }
  };
  // handles adding new newTask
  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTask.trim()) return;
    try {
      const response = await axios.post<Todo>(API_URL, { task: newTask });
      setTodos([...todos, response.data]);
      setNewTask("");
    } catch (error) {
      console.log("Error adding Todo", error);
    }
  };
  return (
    <div>
      {/* title */}
      <h1>Pern Stack To-do</h1>
      {/* add new task */}
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add Task</button>
      </form>
      <hr />
      {/* read todo list */}
      {todos.length === 0 ? (
        <p>No Tasks Found. Start Adding !</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.completed ? "line-through" : "none",
                }}
              >
                {todo.task}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default App;
