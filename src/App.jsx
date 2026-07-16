import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";

import Dashboard from "./pages/Dashboard";
import IncidentExplorer from "./pages/IncidentExplorer";
import CausalGraph from "./pages/CausalGraph";

function App() {
  return (
    <AppLayout title="OrgMind Nexus">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/incidents" element={<IncidentExplorer />} />
        <Route path="/causal-graph" element={<CausalGraph />} />
      </Routes>
    </AppLayout>
  );
}

export default App;