import { useEffect, useState } from "react";
import axios from "axios";

import "./Tasks.scss";
import TaskItem from "./TaskItem";
import AddTask from "./AddTask";
function Tasks() {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetchTask();
    }, []);

    const fetchTask = async () => {
        try {
            const { data } = await axios.get("http://localhost:8000/tasks");
            setTask(data);
        } catch (error) {
            console.log(error);
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
                            <TaskItem task={lastTask} fetchTask={fetchTask} />
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
