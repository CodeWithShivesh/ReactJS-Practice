import { useEffect } from "react";
import { TodoProvider } from "./Store";
import { useState } from "react";
import { TodoInput, TodoItem } from "./Components";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks((prev) => [...prev, { id: Date.now(), ...task }]);
  };

  const updateTask = (id, task) => {
    setTasks((prev) =>
      prev.map((prevTask) => (prevTask.id === id ? task : prevTask))
    );
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((prevTask) => prevTask.id !== id));
  };

  const selectTask = (id) => {
    setTasks((prev) =>
      prev.map((prevTask) =>
        prevTask.id === id ? { ...prevTask, check: !prevTask.check } : prevTask
      )
    );
  };

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));

    if (tasks && tasks.length > 0) {
      setTasks(tasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TodoProvider
      value={{ tasks, addTask, updateTask, deleteTask, selectTask }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoInput />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {tasks.map((task) => (
              <div className="w-full" key={task.id}>
                <TodoItem task={task}></TodoItem>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
