import logo from './logo.svg';
import './App.css';
import Accordion from './components/Accordion';
import Panel from './components/Panel';
import Accord from './components/Accord';
import { Routes, Route } from "react-router-dom"
import Index from './components';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Movies from './components/Movies';
import Movie from './components/Movie';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={<Index />} />
        <Route path={'/accordion'} element={<Accord />} />
        <Route path={'/home'} element={<HomePage />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/movies'} element={<Movies />} />
        <Route path={'/movie/:id'} element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
