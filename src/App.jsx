import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import LoadingScreen from "./components/common/LoadingScreen";

import Dashboard from "./pages/Dashboard";
import IncidentExplorer from "./pages/IncidentExplorer";
import CausalGraph from "./pages/CausalGraph";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

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