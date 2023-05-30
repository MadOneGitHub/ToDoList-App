import "./Task.css";
const Task = ({ task, onEdit, onDelete }) => {
  return (
    <>
      <div className="whole-task">
        <div className="task">
          <div>{task.todo}</div>
        </div>
        <div className="task-btns">
          <button className="edit-btn" onClick={() => onEdit(task.id)}>
            Edit
          </button>
          <button className="delete-btn" onClick={() => onDelete(task.id)}>
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
export default Task;
