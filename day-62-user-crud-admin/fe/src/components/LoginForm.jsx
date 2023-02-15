import { Button, Grid, TextField } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const URL = "http://localhost:8080/login";
  const navigate = useNavigate();

  async function handleLogSubmit(e) {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();

    if (FETCHED_JSON.status === "success") {
      toast("You are approved to Login");
      navigate("/users");
    } else {
      toast(FETCHED_JSON.status);
    }

    console.log(FETCHED_JSON);
  }

  return (
    <form onSubmit={handleLogSubmit}>
      <Grid>
        <Grid item xs={12}>
          <TextField
            id="email"
            name="email"
            variant="filled"
            type="email"
            size="small"
            defaultValue=""
            label="Username"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            variant="filled"
            size="small"
            defaultValue=""
            label="Password"
            type="password"
          />
        </Grid>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
      </Grid>
    </form>
  );
}
