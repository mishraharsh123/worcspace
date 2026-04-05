import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import KnowledgeBasePage from "./pages/KnowledgeBasePage";

export default function App() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f5f9" }}>
      <Header />
      <Sidebar />
      <main style={{ marginLeft: "208px", marginTop: "56px", padding: "24px" }}>
        <KnowledgeBasePage />
      </main>
    </div>
  );
}
