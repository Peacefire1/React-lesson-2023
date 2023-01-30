import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const URL = "http://localhost:8080/users";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchAllData();
  }, []);

  async function fetchAllData() {
    const FETCHED_DATA = await fetch(URL); //respone
    const FETCHED_JSON = await FETCHED_DATA.json(); //{status: "success" , data : [{id: ...}]}
    setUsers(FETCHED_JSON.data);
  }
  async function handleDelete(userId) {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: userId,
      }),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      username: e.target.username.value,
      age: e.target.age.value,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setUsers(FETCHED_JSON.data);
    console.log(FETCHED_JSON);
  }
  return (
    <div className="App">
      <h1>Day-52-NodeJS FS Module</h1>
      <h3>Create User Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User name:
          <input type="text" name="username" />
        </label>
        <br />
        <label htmlFor="">
          Age:
          <input type="text" name="age" />
        </label>
        <br />
        <button>Submit</button>
      </form>
      <h3>Users List</h3>
      {users &&
        users.map((user, index) => {
          return (
            <div key={index}>
              <p>
                {user.username} : {user.age}
              </p>{" "}
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
