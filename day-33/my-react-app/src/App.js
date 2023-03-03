// import logo from './logo.svg';
import "./App.css";
import logo from "./arrow.svg";
import logo1 from "./actress.svg";
import "bootstrap/dist/css/bootstrap.min.css";
// import bootstrapLog from "bootstrap-icons/icons/0-circle-fill.svg";
import "bootstrap-icons/font/bootstrap-icons.css";
function App() {
  function handleUpVote() {
    console.log("handle iup vote");
    // console.log(props.id);
  }
  return (
    <div className="container">
      <h1>Popular Products</h1>
      <div className="r1">
        <img
          className="rounded-5"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
          alt=""
        ></img>
        <div>
          <p>
            <a href="#" onClick={handleUpVote}>
              <img className="lg " src={logo} />
            </a>
            <strong>55</strong>
          </p>
          <a href="#">Haught or Naight</a>
          <p>High-minded or absent-minded?You decide</p>
          <br />
          <div>
            <p>
              Submitted by:
              <img className="lg" src={logo1} />
              {/* <img className='lg' src="0-circle-fill.svg"/> */}
            </p>
          </div>
        </div>
      </div>
      <div className="r1">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
          alt=""
        ></img>
        <div>
          <p>
            <a href="">
              <img className="lg " src={logo} />
            </a>
            <strong>55</strong>
          </p>
          <a href="#">Haught or Naight</a>
          <p>High-minded or absent-minded?You decide</p>
          <br />
          <div>
            <p>
              Submitted by:
              <img className="lg" src={logo1} />
            </p>
          </div>
        </div>
      </div>
      <div className="r1">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
          alt=""
        ></img>
        <div>
          <p>
            <a href="">
              <img className="lg " src={logo} />
            </a>
            <strong>55</strong>
          </p>
          <a href="#">Haught or Naight</a>
          <p>High-minded or absent-minded?You decide</p>
          <br />
          <div>
            <p>
              Submitted by:
              <img className="lg" src={logo1} />
            </p>
          </div>
        </div>
      </div>
      <div className="r1">
        <img
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-landscape-1648265299.jpg?crop=0.676xw:1.00xh;0.148xw,0&resize=640:*"
          alt=""
        ></img>
        <div>
          <p>
            <a href="">
              <img className="lg " src={logo} />
            </a>
            <strong>55</strong>
          </p>
          <a href="#">Haught or Naight</a>
          <p>High-minded or absent-minded?You decide</p>
          <br />
          <div>
            <p>
              Submitted by:
              <img className="lg" src={logo1} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
