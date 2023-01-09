import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import AlertButton from './components/alertButton';
import Toolbar from './components/ToolBar';
import PlayButton from './components/playButton';
import ToolBarNext from './components/ToolBarNext';
import ParentToolBar from './components/ParentToolBar';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <h1>Day-38 React Events</h1>
      <Button />
      <Toolbar />
      <PlayButton movieName="hi" />
      <ToolBarNext />
      <ParentToolBar />
      <SignUp />
    </div>
  );
}

export default App;
