import "./App.css";
import { useState } from "react";
import List from "./components/List";

function App() {
  const [isLarge, setIsLarge] = useState(false);

  const imageSize = isLarge ? 150 : 100;
  function handleChecked() {
    setIsLarge(!isLarge);
    console.log(isLarge);
  }

  return (
    <div className="App">
      <label htmlFor="">
        Use large Images
        <input type="checkbox" checked={isLarge} onChange={handleChecked} />
        <hr />
        <List imageSize={imageSize} />
      </label>
    </div>
  );
}

export default App;
