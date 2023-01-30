import logo from "./logo.svg";
import "./App.css";
import Input from "./components/input";
import Anime from "./components/Anime";
import Button from "./components/Button";
import TopAnime from "./components/TopAnime";
import Exercises from "./components/exercises";

function App() {
  return (
    <div className="App">
      <Anime />
      <Button />
      <Input />
      <TopAnime />
      <Exercises />
    </div>
  );
}

export default App;
