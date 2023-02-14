import { Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function UserRegisterForm() {
  const URL = "http://localhost:8080/register";
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.firstname.value);
    const data = {
      firstname: e.target.firstname.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
      password: e.target.password.value,
      address: e.target.address.value,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    const FETCHED_DATA = await fetch(URL, options);
    const FETCHED_JSON = await FETCHED_DATA.json();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              id="firstname"
              name="firstname"
              variant="filled"
              size="small"
              defaultValue=""
              label="First name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="lastname"
              name="lastname"
              variant="filled"
              size="small"
              defaultValue=""
              label="Last name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="email"
              name="email"
              variant="filled"
              size="small"
              defaultValue=""
              label="Email"
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
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              name="confirm-password"
              variant="filled"
              size="small"
              defaultValue=""
              label="Confirm Password"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              variant="filled"
              size="small"
              defaultValue=""
              label="Addres"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="outlined" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
