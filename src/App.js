import "./App.css";
import FlowerAuction from "./components/FlowerAuction";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AccountManagement from "./components/AccountManagement";
import Add from "./components/Add";
import Edit from "./components/Edit";
// import HomePage from "./components/Homepage";
import { UserProvider } from './contexts/UserContext';

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/account" element={<AccountManagement />}></Route>
          <Route path="/" element={<FlowerAuction />}></Route>
          <Route path="/add" element={<Add />}></Route>
          <Route path="/edit/:id" element={<Edit />}></Route>
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
