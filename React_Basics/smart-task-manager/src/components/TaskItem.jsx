export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="flex items-center justify-between py-3">
      <span
        onClick={() => onToggle(task.id)}
        className={`cursor-pointer transition ${
          task.completed
            ? "line-through text-gray-400"
            : "text-gray-700 hover:text-indigo-600"
        }`}
      >
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        className="text-sm bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
      >
        Delete
      </button>
    </li>
  );
}
