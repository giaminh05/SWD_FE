import "./App.css";
import FlowerAuction from "./components/FlowerAuction";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import AccountManagement from "./components/AccountManagement";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/account" element={<AccountManagement />}></Route>
        <Route path="/" element={<FlowerAuction />}></Route>
      </Routes>
    </div>
  );
}

export default App;
