import logo from './logo.svg';
import './App.css';
import MainMenu from './components/MainMenu';
import Button from 'react-bootstrap/Button';




function App() {
  return (
    <div className="App">
      <div className='MenuContainer'>
          <MainMenu/>
      </div>
      <h1>React Bootstrap</h1>
      <Button variant="primary">Hello Bootstrap Button</Button>

    </div>
  );
}

export default App;
