import CustomButton from "./CustomButton";
import "./sidebar.scss";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const hangleSairButton = () => {
    navigate("/login");
  };
  return (
    <div className="sidebar-container">
      <div className="logo">
        <h1>TaskMananger!</h1>
      </div>

      <div className="sign-out">
        <CustomButton onClick={hangleSairButton}>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
