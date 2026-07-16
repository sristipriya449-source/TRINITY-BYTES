import AppLayout from "./components/layout/AppLayout";

function App() {
  return (
    <AppLayout title="Operational Intelligence">
      <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <h1 className="text-5xl font-bold">
          OrgMind Nexus 🚀
        </h1>
      </div>
    </AppLayout>
  );
}

export default App;