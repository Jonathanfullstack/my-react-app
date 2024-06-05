import CustomButton from "../components/CustomButton";
import "./login.scss";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSignCLick = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <h1>Task Mananger!</h1>
      <div className="button-container">
        <CustomButton onClick={handleSignCLick}>Entrar!</CustomButton>
      </div>
    </div>
  );
};

export default Login;
