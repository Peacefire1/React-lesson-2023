import logo from './logo.svg';
import './App.css';
import FeedBack from './components/FeedBackForm';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Usukhuu from './components/about/usukhuu';
import Khangai from './components/about/khangai';
import NotFound from './components/about/notFound';

function App() {
  return (
    <div className="App">
      <h1>Day-43</h1>
      <div id='navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/register"}>Register</Link>
        {/* <a to="/home">Home</a> */}
      </div>
      <Routes>
        <Route path="/about/*" element={<About />}>

          <Route path="usukhuu" element={<Usukhuu />} />
          <Route path="khangai" element={<Khangai />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
