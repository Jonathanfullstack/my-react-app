import Tasks from "../components/Tasks";
import Sidebar from "../components/sidebar";

import "./home.scss";
const Home = () => {
  return (
    <div className="home-container">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
