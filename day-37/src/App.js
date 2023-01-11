import logo from './logo.svg';
import './App.css';
import AliceCarousel from "react-alice-carousel"
import carouselData from './data/carousel';

function App() {

  const images = carouselData.map(data => {
    return (
      <img src={data.name} className={data.style} />
    )
  })


  return (
    <div className="App">
      <h1>React Day - 37</h1>
      <AliceCarousel autoPlay autoPlayInterval="3000">
        <img src='logo.svg' className="sliderimg" />
        <img src='logo.svg' className="sliderimg" />
        <img src='logo.svg' className="sliderimg" />
        <img src='logo.svg' className="sliderimg" />
      </AliceCarousel>
    </div>
  );
}

export default App;
