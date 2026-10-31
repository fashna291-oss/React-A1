function TaskCard({task, onComplete, onDelete, onUndo}){
    
      const cardColors = {
    todo: "pink-card",
    progress: "purple-card",
    review: "yellow-card",
    completed: "gray-card"
  };
    
    return (
        <div className={'task-card ${cardColors[task.status]}'}>

            <div className="task-card-top">
                <span className="task-subject">{task.subject}</span>

                <span className="more-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis preview-icon"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg></span>

            </div>

             <h3 className={task.status === "completed" ? "strike" : ""}>
        {task.title}
      </h3>

            <p className={task.status === "completed" ? "strike" : ""}>
        {task.description}
      </p>

      <div className="task-date">
         Student Assignment
      </div>

            <div className="task-actions">

              {task.status !== "completed" ? (

          <button
            className="complete-btn"
            onClick={() => onComplete(task.id)}
          >
            Complete
          </button>
              ) :  (
               <button
            className="undo-btn"
            onClick={() => onUndo(task.id)}
          >
             Undo
          </button>

        )}

        <button
          className="delete-btn"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>


                
               
            </div>
        </div>
    )
}

export default TaskCard;