import logo from "./logo.svg";
import "./App.css";
import { Route, Router, Routes } from "react-router-dom";
import Users from "./pages/Users";
import ResponsiveDrawer from "./pages/SideBar";

function App() {
  return (
    <div className="App">
      <h1>Admin Panel Project</h1>
      <ResponsiveDrawer />
    </div>
  );
}

export default App;
