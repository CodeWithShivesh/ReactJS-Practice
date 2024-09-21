import { useState } from "react";
import { useTodo } from "../Store";

function TodoItem({ task }) {
  const [isTaskEditable, setIsTaskEditable] = useState(false);
  const [taskTitle, setTaskTitle] = useState(task.task);

  const { updateTask, deleteTask, selectTask } = useTodo();

  const editTask = () => {
    updateTask(task.id, { ...task, task: taskTitle });
    setIsTaskEditable(false);
  };

  const selectedTask = () => {
    selectTask(task.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        task.check ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={task.check}
        onChange={selectedTask}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTaskEditable ? "border-black/10 px-2" : "border-transparent"
        } ${task.check ? "line-through" : ""}`}
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        readOnly={!isTaskEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (task.check) return;

          if (isTaskEditable) {
            editTask();
          } else setIsTaskEditable((prev) => !prev);
        }}
        disabled={task.check}
      >
        {isTaskEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Task Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTask(task.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
