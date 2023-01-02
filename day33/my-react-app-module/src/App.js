// import logo from './logo.svg';
import './App.css';
import logo from "./arrow.svg";
import logo1 from "./actress.svg";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     {/* <img src={logo} className="App-logo" alt="logo" /> */}
    //     <h1>Popular Products</h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className="container">
       <h1>Popular Products</h1>
       <div className="r1">
          <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*" alt=""></img>
          <div>
            <p><img className='lg' src={logo}/><strong>55</strong></p>
            <p>Haught or Naight</p>
            <p>High-minded or absent-minded?You decide</p>
            <br/>
            <div>
            <p>Submitted by:

            <img className='lg' src={logo1}/>
            </p>

            </div>
          </div>
       </div>
    </div>
  );
}

export default App;
