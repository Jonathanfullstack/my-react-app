import { useEffect, useState } from "react";

import TaskItem from "./components/TaskItem";

import axios from "axios";
const App = () => {
    const [tasks, setTask] = useState([
        {
            id: "1",
            description: "Estudar programacao",
            isCompleted: false,
        },
        {
            id: "2",
            description: "Ler",
            isCompleted: true,
        },
    ]);

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
        <>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} />
            ))}
        </>
    );
};

export default App;
