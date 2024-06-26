import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useAlert } from "react-alert";
import axios from "axios";
import CustomInput from "./Custominput";
import "./AddTask.scss";
import CustomButton from "./CustomButton";
const AddTask = ({ fetchTasks }) => {
  const [task, setTask] = useState("");
  const alert = useAlert();
  const onChange = (e) => {
    setTask(e.target.value);
  };

  const handleTaskAddition = async () => {
    if (task.length === 0) {
      alert.error("A tarefa precisa de uma descricao para ser adicionada!");
      return;
    }

    try {
      await axios.post("https://task-back-end.onrender.com/tasks", {
        description: task,
        isCompleted: false,
      });
      alert.success("Tarefa adicionada com sucesso!"); // Opcional: exibir uma mensagem de sucesso
    } catch (_e) {
      alert.error("Ocorreu um erro ao adicionar a tarefa.");
    }

    await fetchTasks();
    setTask("");
  };

  return (
    <div className="add-task-container">
      <CustomInput
        label="Adicionar tarefa..."
        value={task}
        onChange={onChange}
        onEnterPress={handleTaskAddition}
      />
      <CustomButton onClick={handleTaskAddition}>
        <FaPlus size={14} color="#ffffff" />
      </CustomButton>
    </div>
  );
};

export default AddTask;
