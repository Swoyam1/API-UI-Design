import Content from "./pages/content/Content";
import Sidebar from "./components/sidebar/Sidebar";
import "./styles/global.scss";

function App() {
  return (
    <div className="main">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
