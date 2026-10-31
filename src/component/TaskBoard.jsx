
import TaskCard from "./TaskCard";

function TaskBoard({ tasks, onComplete, onDelete, onUndo }) {

  const columns = [

    {
      id: "todo",
      title: "To Do",
      color: "pink"
    },

    {
      id: "progress",
      title: "In Progress",
      color: "purple"
    },

    {
      id: "review",
      title: "Under Review",
      color: "yellow"
    },

    {
      id: "completed",
      title: "Completed",
      color: "gray"
    }

  ];

  return (

    <section className="task-board">

      {columns.map((column) => {

        const columnTasks = tasks.filter(
          (task) => task.status === column.id
        );

        return (

          <div className="board-column" key={column.id}>

            <div className="column-heading">

              <div className="column-title">

                <span className={`dot ${column.color}`}></span>

                <h3>{column.title}</h3>

              </div>

              <span className="task-count">
                {String(columnTasks.length).padStart(2, "0")}
              </span>

            </div>

            <div className="column-add">
              + Add new tasks
            </div>

            {columnTasks.length === 0 ? (

              <p className="empty-message">
                No tasks available
              </p>

            ) : (

              columnTasks.map((task) => (

                <TaskCard
                  key={task.id}
                  task={task}
                  onComplete={onComplete}
                  onDelete={onDelete}
                  onUndo={onUndo}
                />

              ))

            )}

          </div>

        );

      })}

    </section>
  );
}

export default TaskBoard;
