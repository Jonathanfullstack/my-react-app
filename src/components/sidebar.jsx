import CustomButton from "./CustomButton";
import "./sidebar.scss";

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            <div className="logo">
                <h1>TaskMananger!</h1>
            </div>

            <div className="sign-out">
                <CustomButton>Sair</CustomButton>
            </div>
        </div>
    );
};

export default Sidebar;
