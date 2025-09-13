import { useDashboard } from "../context/useDashboard";
import Category from "./Category";
import { IoSearch } from "react-icons/io5";
import "../styles/Dashboard.css";

const Dashboard = () => {
    const { categories, setSearchTerm } = useDashboard();

    return (
        <div className="app-container">
            <div className="header">
                <div className="header-left">
                    <div className="logo">DB</div>
                    <div className="header-title">
                        <h1>Dynamic Dashboard</h1>
                        <p>Manage categories & widgets</p>
                    </div>
                </div>

                <div className="controls">
                    <div className="search" role="search">
                        <IoSearch />
                        <input
                            type="text"
                            placeholder="Search widgets..."
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="categories">
                {categories.map((cat) => (
                    <Category key={cat.id} category={cat} />
                ))}
            </div>
        </div>
    );
};

export default Dashboard;
