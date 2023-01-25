import logo from './logo.svg';
import './App.css';

function App() {
  let b = 1
  function greet(a) {
    console.log("hello " + a + ":)");
  }
  // let input = prompt("Enter a name: ")
  greet("haha")

  let person1 = {
    firstname: "Наранбаяр",
  }
  let person2 = person1;
  // person2.firstName = "Эрдэнэ";
  // console.log(person1.firstName);
  // console.log(person2.firstName);

  person2 = { ...person1 }
  person2.firstName = "Эрдэнэ";
  console.log(person1.firstName);
  console.log(person2.firstName);


  return (
    <div className="App">

    </div>
  );
}

export default App;
