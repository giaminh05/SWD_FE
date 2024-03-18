import "./App.css";
import FlowerAuction from "./components/FlowerAuction";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <FlowerAuction />
      <Routes>
        {/* <Route path="/dashboard" element={<Dashboard />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
