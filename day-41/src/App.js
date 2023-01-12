import logo from './logo.svg';
import './App.css';
import Paragraph from './components/Paragraph';
import Counter from './components/counter';
import UpdateArrays from './components/updateArrays';
import List from './components/SpreadArray';
import UpdatingObjects from './components/UpdatingObj';

function App() {
  return (
    <div className="App">
      {/* <Paragraph /> */}
      <Counter />
      <UpdateArrays />
      <List />
      <UpdatingObjects />
    </div>
  );
}

export default App;
