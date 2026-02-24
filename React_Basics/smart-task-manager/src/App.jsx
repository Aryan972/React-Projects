import { useState, useEffect } from "react";
import "./App.css";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    //run this code after component renders
    const fetchTasks = async () => {
      //1. If successful
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=5",
        ); //await execution until promise resolves

        if (!response.ok) {
          throw new Error("Unable to load the tasks"); //if data not loaded properly
        }

        const data = await response.json();
        setTasks(data); //send all the tasks to setTasks
      } catch (err) {
        //if error
        setError(err.message);
      } finally {
        //in either of the cases, data will either fetch or fail but state won't be loading anymore -. so set it to false
        setLoading(false);
      }
    };

    fetchTasks(); //caaling the function -> using async/await promises
  }, []);

  //toggling the task status
  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id == id) {
        return { ...task, completed: !task.completed }; //spread operator copies the existing properties
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  //add the task using form
  function addTask(title){
        const newTask = {
            id: Date.now(),
            title,
            completed:false,
        };

        setTasks([newTask, ...tasks]); //spread operator will copy the whole object
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => {
      return task.id != id;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-xl p-6 space-y-6">
            <h1 className="text-3xl font-bold text-center text-gray-800"> Smart Task Manager</h1>

            <TaskForm onAdd={addTask} />
            {loading && <Loading />}{/* if loading is true -> return <Loading /> else return false*/}
            {error && <ErrorMessage message={error} />}
            {!loading && !error && (
                <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
            )}
        </div>
    </div>
  );
}
