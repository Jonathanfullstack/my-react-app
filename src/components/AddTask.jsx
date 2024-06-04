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
        try {
            if (task.length == 0) {
                return alert.error(
                    "A tarefa precisa de uma descricao para ser adicionada!"
                );
            }
        } catch (error) {}
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
