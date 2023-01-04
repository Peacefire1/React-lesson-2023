
import './App.css';

function Profile({img, name, age, skinColor, heigth}){
// const {img, name, age, skinColor, heigth} = props;

  return(
    <div className='profile'>
      <img src={img} alt='people'></img>
      <p>name:{name}</p>
      <p>age:{age}</p>
      <p>skinColor:{skinColor}</p>
      <p>heigth:{heigth}</p>
    </div>
  )
}

function App() {
  const user = {
        img:"logo192.png",
        name:"jhon Smith",
        age : 20,
        skinColor : "Snow White",
        heigth : "170cm"
  }
  return (
    <div className="App">
      <Profile
        img="logo192.png"
        name="jhon Smith"
        age={20}
        skinColor="Snow White"
        heigth="170cm"
        // {...user}
      />
      <Profile
        img="logo192.png"
        name="jhon Smith"
        age={20}
        skinColor="Snow White"
        heigth="170cm"
        // {...user}
      />
    </div>
  );
}

export default App;
