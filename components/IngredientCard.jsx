import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
export const IngredientCard = ({
  task,
  deleteTodo,
  editTodo,
  toggleComplete,
}) => {
  return (
    <div className="flex w-auto gap-2 bg-slate-200 dark:bg-tertiary shadow-custom-btn-light dark:shadow-custom-btn-dark py-3 px-2 rounded-md">
      <p
        className={`${task.completed ? "completed" : ""}`}
        onClick={() => toggleComplete(task.id)}
      >
        {task.task}
      </p>
      <div className="hover:cursor-pointer hover:opacity-50">
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};
