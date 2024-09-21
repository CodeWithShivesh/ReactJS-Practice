import { useState } from "react";
import { useTodo } from "../Store";

function TodoInput() {
  const [task, setTask] = useState("");
  const { addTask } = useTodo();

  const addItem = (e) => {
    e.preventDefault();

    if (!task) return;

    addTask({ task, check: false });
    // setTask(" ");
  };

  return (
    <form onSubmit={addItem} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoInput;
