import { useEffect, useState } from "react";
import axios from "axios";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
import { useAlert } from "react-alert";
function Tasks() {
    const [tasks, setTask] = useState([]);
    const alert = useAlert();
    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTask(data);
        } catch (_error) {
            alert.error("Nao foi possivel recuperar as tarefas!");
        }
    };
    return (
        <div className="tasks-container">
            <h2>Minhas Tarefas</h2>
            <div className="last-tasks">
                <h3>Ultimas tarefas</h3>
                <AddTask fetchTasks={fetchTask} />
                <div className="task-list">
                    {tasks
                        .filter((task) => task.isCompleted === false)
                        .map((lastTask) => (
                            <TaskItem
                                key={lastTask._id}
                                task={lastTask}
                                fetchTask={fetchTask}
                            />
                        ))}
                </div>
            </div>
            <div className="completed-tasks">
                <h3>Tarefas Concluidas</h3>
                <div className="task-list">
                    {tasks
                        .filter((task) => task.isCompleted)
                        .map((completedTask) => (
                            <TaskItem
                                key={completedTask._id}
                                task={completedTask}
                                fetchTask={fetchTask}
                            />
                        ))}
                </div>
            </div>
        </div>
    );
}

export default Tasks;
