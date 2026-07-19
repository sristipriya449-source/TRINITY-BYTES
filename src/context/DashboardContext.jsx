import React, { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export function DashboardProvider({ children }) {
  const [decisionData, setDecisionData] = useState({
    
    score: 87,
    failures: 34,
    costSaved: "$240K",
    responseImprovement: "42%",
  });
  const [stats, setStats] = useState({
  decisionsAnalyzed: 0,
  highRiskAlerts: 0,
  averageRiskScore: 0,
  knowledgeEntries: 0,
});

  const [timeline, setTimeline] = useState([
    {
      title: "System initialized",
      time: "Just now",
    },
  ]);

  const analyzeDecision = (data) => {
  setDecisionData({
    score: data.score,
    failures: data.failures,
    costSaved: data.costSaved,
    responseImprovement: data.responseImprovement,
  });

  setTimeline((prev) => [
    {
      title: data.title,
      time: "Just now",
    },
    ...prev,
  ]);

  setStats((prev) => ({
    decisionsAnalyzed: prev.decisionsAnalyzed + 1,

    highRiskAlerts:
      prev.highRiskAlerts + (data.score < 80 ? 1 : 0),

    averageRiskScore:
      prev.decisionsAnalyzed === 0
        ? data.score
        : Math.round(
            (prev.averageRiskScore * prev.decisionsAnalyzed + data.score) /
              (prev.decisionsAnalyzed + 1)
          ),

    knowledgeEntries: prev.knowledgeEntries + 1,
  }));
};

  return (
    <DashboardContext.Provider
      value={{
        decisionData,
        timeline,
        stats,
        analyzeDecision,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export function useDashboard() {
  return useContext(DashboardContext);
}