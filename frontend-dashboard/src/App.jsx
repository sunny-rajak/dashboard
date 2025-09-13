import { DashboardProvider } from "./context/DashboardContext.jsx";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <DashboardProvider>
            <Dashboard />
        </DashboardProvider>
    );
}

export default App;
