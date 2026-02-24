import TaskItem from "./TaskItem";

export default function TaskList({ tasks, onToggle, onDelete }) {
  //this return is only my render if you compare with the JS Vanilla -> bcz render calls on state change
  return (
    <ul className="divide-y divide-gray-200">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
