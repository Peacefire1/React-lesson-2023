import "./App.css";
import { useEffect, useState } from "react";
import {
  createUser,
  fetchAllData,
  deleteUser,
  updateUser,
} from "./services/userServices";
// import { fetchAllData } from "./services/axiosUsersServices";

function App() {
  const URL = "http://localhost:8080/users";
  const newUser = {
    id: "",
    username: "",
    age: "",
  };

  const [users, setUsers] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);
  const [currentUser, setCurrentUser] = useState(newUser);

  useEffect(() => {
    fetchAllData(URL, setUsers);
  }, []);
  async function handleUserName(e) {
    setCurrentUser({
      ...currentUser,
      username: e.target.value,
    });
  }
  async function handleUserAge(e) {
    setCurrentUser({
      ...currentUser,
      age: e.target.value,
    });
  }

  async function handleEdit(userId) {
    setIsUpdate(true);

    const filteredUser = users.filter((user) => user.id === userId)[0];

    if (filteredUser) {
      setCurrentUser({
        id: filteredUser.id,
        age: filteredUser.age,
        username: filteredUser.username,
      });
    }
  }

  async function handleDelete(userId) {
    deleteUser(userId, URL, setUsers);
  }
  // async function createUser(
  //   currentUser,
  //   URL,
  //   setUsers,
  //   setIsUpdate,
  //   setCurrentUser,
  //   newUser
  // ) {}
  async function handleSubmit(e) {
    e.preventDefault();
    if (!isUpdate) {
      updateUser(e, URL, setUsers);
    } else {
      createUser(
        currentUser,
        URL,
        setUsers,
        setIsUpdate,
        setCurrentUser,
        newUser
      );
    }
  }
  return (
    <div className="App">
      <h1>Day-52-NodeJS FS Module</h1>
      <h3>Create User Form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          User name:
          <input
            type="text"
            name="username"
            value={currentUser.username}
            onChange={handleUserName}
          />
        </label>
        <br />
        <label htmlFor="">
          Age:
          <input
            type="text"
            name="age"
            value={currentUser.age}
            onChange={handleUserAge}
          />
        </label>
        <br />
        <button>{isUpdate ? "Update" : "Submit"}</button>
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
              <button onClick={() => handleEdit(user.id)}>Edit</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
