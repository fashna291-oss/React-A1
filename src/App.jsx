import { useState } from "react";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import Stats from "./component/Stats";
import TaskForm from "./component/TaskForm";
import TaskBoard from "./component/TaskBoard";
import UsersPanel from "./component/UsersPanel";
import './App.css'



function App(){
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Geometry Genius",
      subject: "Mathematics",
      description: "Complete geometry exercises and understand important concepts.",
      status: "todo"
    },
    {
       id: 2,
      title: "Reading Realm",
      subject: "English",
      description: "Read the assigned chapter and prepare your notes.",
      status: "todo"
    },
    {
       id: 3,
      title: "Vocab Voyage",
      subject: "Science",
        description: "Learn new vocabulary and practice important terms.",
      status: "progress"
    },
    {
       id: 4,
      title: "Algebra Adventures",
      subject: "Mathematics",
        description: "Practice algebra questions and solve equations.",
      status: "progress"
    },
    {
       id: 5,
      title: "Sentence Sculptor",
      subject: "English",
        description: "Improve sentence structure and check grammar.",
      status: "review"
    },
      {
      id: 6,
      title: "Express Yourself",
      subject: "Sports",
      description: "Complete your personal development assignment.",
      status: "completed"
    },
     {
      id: 7,
      title: "Number Navigator",
      subject: "Mathematics",
      description: "Complete number system exercises.",
      status: "completed"
     }
  ]);

  const [search, setSearch] = useState("");


 function addTask(title, subject){
  setTasks((prevTasks) => [
    ...prevTasks,{
      id: Date.now(),
      title,
      subject,
      description: "Complete your assignment.",
      status: "todo"
    }
  ]);
 }

  function completedTask(id) {
  setTasks((prevTasks) =>
    prevTasks.map((task) =>
      task.id === id
        ? { ...task, status: "completed" }
        : task
    )
  );
}



  function undoTask(id) {

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status: "todo"
            }
          : task
      )
    );
  }

  function deleteTask(id) {
  setTasks((prevTasks) =>
    prevTasks.filter((task) => task.id !== id)
  );
}

   const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Sidebar/>

      <main className="main-content">

      <Header search={search} setSearch={setSearch}/>

      <Stats task={tasks}/>

    <TaskForm onAddTask={addTask}/>

    <TaskBoard 
    tasks={filteredTasks}
    onComplete={completedTask}
    onDelete={deleteTask}
    onUndo={undoTask}/>

    <UsersPanel/>

      
      </main>
    </div>
  )
}

export default App;