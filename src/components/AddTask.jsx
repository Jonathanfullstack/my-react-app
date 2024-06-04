import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";
import CustomInput from "./Custominput";
import "./AddTask.scss";
import CustomButton from "./CustomButton";
const AddTask = () => {
    const [task, setTask] = useState("");
    const alert = useAlert();
    const onChange = (e) => {
        setTask(e.target.value);
    };

    const handleTaskAddition = async () => {
        if (task.length === 0) {
            alert.error(
                "A tarefa precisa de uma descricao para ser adicionada!"
            );
            return;
        }

        try {
            await axios.post("http://localhost:8000/tasks", {
                description: task,
                isCompleted: false,
            });
            alert.success("Tarefa adicionada com sucesso!"); // Opcional: exibir uma mensagem de sucesso
        } catch (error) {
            console.error("Erro ao adicionar tarefa:", error);
            alert.error("Ocorreu um erro ao adicionar a tarefa.");
        }
    };

    return (
        <div className="add-task-container">
            <CustomInput
                label="Adicionar tarefa..."
                value={task}
                onChange={onChange}
            />
            <CustomButton onClick={handleTaskAddition}>
                <FaPlus size={14} color="#ffffff" />
            </CustomButton>
        </div>
    );
};

export default AddTask;
