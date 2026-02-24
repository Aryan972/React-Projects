import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    onAdd(inputValue);
    setInputValue(""); //clear input after submitting
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task..."
        className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />

      <button
        type="submit"
        className="bg-indigo-500 text-white px-5 py-2 rounded-lg hover:bg-indigo-600 transition duration-200"
      >
        Add
      </button>
    </form>
  );
}
