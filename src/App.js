import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Result from "./pages/Result";

function App() {
  return (
    <div className="App">
      <div className="wrapper max-w-xl mx-auto pb-10 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="result/:link" element={<Result />} />
          <Route path=":link" element={<Main />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
