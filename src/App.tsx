import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Devices from "./pages/Devices";
import Simulator from "./pages/Simulator";

export default function App() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <main style={{ padding: "15px", flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/simulator" element={<Simulator />} />
        </Routes>
      </main>
    </div>
  );
}