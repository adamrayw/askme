import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App h-screen" style={{ backgroundColor: "#f6f8fd" }}>
      <div className="wrapper max-w-2xl mx-auto pb-10 pt-28 px-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="result" element={<Result />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
