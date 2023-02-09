import "./App.css";
import { useState } from "react";
import List from "./components/List";
import StopWatch from "./components/StopWatch";
import InputFocus from "./components/InputFocus";
import VideoPlayer from "./components/VideoPlayer";

function App() {
  const [isLarge, setIsLarge] = useState(false);

  const imageSize = isLarge ? 150 : 100;
  function handleChecked() {
    setIsLarge(!isLarge);
    console.log(isLarge);
  }

  return (
    <div className="App">
      <h1>Day-50 -useRef</h1>
      <StopWatch />
      <InputFocus />
      <VideoPlayer />
      {/* <label htmlFor="">
        Use large Images
        <input type="checkbox" checked={isLarge} onChange={handleChecked} />
        <hr />
        <List imageSize={imageSize} />
      </label> */}
    </div>
  );
}

export default App;
