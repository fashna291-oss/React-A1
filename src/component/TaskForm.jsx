
import { useState } from "react";

function TaskForm({ onAddTask }) {

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("General");

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted");

    if (title.trim() === "") {
      alert("Please enter task name");
      return;
    }

    if (typeof onAddTask !== "function") {
      console.error("onAddTask function is missing!");
      return;
    }

    onAddTask(title.trim(), subject);

    setTitle("");
    setSubject("General");
  }

  return (
    <section className="add-section">

      <form
        className="task-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          placeholder="Enter task title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <select
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value="General">General</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
          <option value="Programming">Programming</option>
        </select>

        <button type="submit">
          + Add Task
        </button>

      </form>

    </section>
  );
}

export default TaskForm;
