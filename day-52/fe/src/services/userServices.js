async function fetchAllData(URL, setUsers) {
  console.log("fetch");
  const FETCHED_DATA = await fetch(URL); //respone
  const FETCHED_JSON = await FETCHED_DATA.json(); //{status: "success" , data : [{id: ...}]}
  setUsers(FETCHED_JSON.data);
}
export { fetchAllData };

async function deleteUser(userId, URL, setUsers) {
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
export { deleteUser };

async function updateUser(e, URL, setUsers) {
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
export { updateUser };

async function createUser(
  setCurrentUser,
  currentUser,
  newUser,
  URL,
  setIsUpdate,
  setUsers
) {
  const putData = {
    id: currentUser.id,
    username: currentUser.username,
    age: currentUser.age,
  };
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(putData),
  };
  const FETCHED_DATA = await fetch(URL, options);
  const FETCHED_JSON = await FETCHED_DATA.json();
  setUsers(FETCHED_JSON.data);
  setIsUpdate(false);
  setCurrentUser(newUser);
}

export { createUser };
