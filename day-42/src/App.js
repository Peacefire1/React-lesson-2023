import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])
  // const add = () => {
  //   const newUser = { ...Users }
  //   setUsers(newUser)
  //   console.log(Users);
  // }
  function handleRegister(event) {
    event.preventDefault()
    const user = {
      firstname: event.target.firstname.value,
      lastname: event.target.lastname.value,
      password: event.target.password.value,
      confirmpassword: event.target.password.value,
    }
    setUsers([...users, user])
    console.log(users);
  }
  return (
    <div className="App">
      <form action="" onSubmit={handleRegister}>
        <label>Firstname:<input name='firstname' placeholder='Firstname' /></label><br />
        <label>Lastname:<input name='lastname' placeholder='Lastname' /></label><br />
        <label>Password:<input name='password' placeholder='Password' /></label><br />
        <label>Confirm Password:<input name='confirmpassword' placeholder='Confirm Password' /></label>
        <br />
        <button >Register</button>
      </form>

      <h2>User PReview</h2>
      {users.map(u => {
        return (
          <div>
            <div>{u.firstname}</div>
            <div>{u.lastname}</div>
          </div>
        )
      })}
    </div>
  );
}

export default App;
