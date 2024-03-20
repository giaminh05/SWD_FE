import "./App.css";
import FlowerAuction from "./components/FlowerAuction";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AccountManagement from "./components/AccountManagement";
import Add from "./components/Add";
import Edit from "./components/Edit";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/account" element={<AccountManagement />}></Route>
        <Route path="/" element={<FlowerAuction />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:_id" element={<Edit />}></Route>
      </Routes>
    </div>
  );
}

export default App;
