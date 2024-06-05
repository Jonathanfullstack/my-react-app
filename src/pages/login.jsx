import CustomButton from "../components/CustomButton";
import "./login.scss";

const Login = () => {
  return (
    <div className="login-container">
      <h1>Task Mananger!</h1>
      <div className="button-container">
        <CustomButton>Entrar!</CustomButton>
      </div>
    </div>
  );
};

export default Login;
