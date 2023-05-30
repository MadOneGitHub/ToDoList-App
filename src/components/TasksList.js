import Task from "./Task";

const TasksList = ({ tasks, onEdit, onDelete }) => {
  return (
    <div>
      {tasks.map((item) => {
        return (
          <Task key={item.id} task={item} onEdit={onEdit} onDelete={onDelete} />
        );
      })}
    </div>
  );
};
export default TasksList;
