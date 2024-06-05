import Tasks from "./components/Tasks";
import Sidebar from "./components/sidebar";
import "./App.scss";
const App = () => {
    return (
        <div className="app-container">
            <Sidebar />
            <Tasks />
        </div>
    );
};

export default App;
