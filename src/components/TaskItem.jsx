import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import { useAlert } from "react-alert";
import "./TaskItem.scss";

const TaskItem = ({ task, fetchTask }) => {
    const alert = useAlert();
    const handleTaskDeleted = async () => {
        try {
            await axios.delete(`http://localhost:8000/tasks/${task._id}`);
            await fetchTask();
            alert.success("A tarefa foi removida com sucesso!");
        } catch (_error) {
            alert.error("Algo deu errado!");
        }
    };
    const handleTaskCompleted = async (e) => {
        try {
            await axios.patch(`http://localhost:8000/tasks/${task._id}`, {
                isCompleted: e.target.checked,
            });
            await fetchTask();
            alert.success("A tarefa foi concluida com sucesso !");
        } catch (error) {
            alert.error("Algo deu errado!");
        }
    };
    return (
        <div className="task-item-container">
            <div className="task-description">
                <label
                    className={
                        task.isCompleted
                            ? "checkbox-container-completed"
                            : "checkbox-container"
                    }
                >
                    {task.description}
                    <input
                        type="checkbox"
                        defaultChecked={task.isCompleted}
                        onChange={(e) => handleTaskCompleted(e)}
                    />
                    <span
                        className={
                            task.isCompleted
                                ? "checkmark completed"
                                : "checkmark"
                        }
                    ></span>
                </label>
            </div>
            <div className="delete">
                <AiFillDelete
                    size={18}
                    color="#F97474"
                    onClick={handleTaskDeleted}
                />
            </div>
        </div>
    );
};

export default TaskItem;
