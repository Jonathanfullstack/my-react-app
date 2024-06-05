import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Tasks from "../components/Tasks";
import Sidebar from "../components/sidebar";

import "./home.scss";
const Home = () => {
  const params = useParams();
  useEffect(() => {
    console.log(params.name);
  }, [params]);

  return (
    <div className="home-container">
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
