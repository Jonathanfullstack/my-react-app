import React from "react";
import "./CustomButton.scss"; // Certifique-se de que este arquivo exista

const CustomButton = ({ children, onClick }) => {
    return (
        <div className="custom-button-container" onClick={onClick}>
            {children}
        </div>
    );
};

export default CustomButton;
