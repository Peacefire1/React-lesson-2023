import { Button, TextField } from "@mui/material";
import { useState } from "react";

export default function CreateProduct() {
  const URL = "http://localhost:8081/users";
  const [users, setUsers] = useState([]);
  async function handleSubmit(e) {
    e.preventDefault();
    const postData = {
      Title: e.target.title.value,
      Subtitle: e.target.Subtitle.value,
    };
    console.log(postData);

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
    console.log(users);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h1>New Product</h1>
      <TextField
        name="Image"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Iamge"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Title"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Title"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Subtitle"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Subtitle"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Discount"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Discount"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Description1"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Description1"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Description2"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Description2"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Code"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Hashtag"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        name="Title"
        sx={{ width: 500 }}
        id="filled-basic"
        label="Technology"
        variant="filled"
      />
      <br />
      <br />
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Rating"
        variant="filled"
      />
      <br />
      <div className="button">
        <Button color="secondary" type="submit">
          Save
        </Button>
        <Button variant="contained" color="success">
          Back
        </Button>
      </div>
    </form>
  );
}
