import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

export default function CreateUser() {
  const URL = "http://localhost:8081/user_role";

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Age"
      >
        <MenuItem value={10}>Admin</MenuItem>
        <MenuItem value={20}>Customer</MenuItem>
        <MenuItem value={30}>User</MenuItem>
      </Select>
      <Button color="secondary" type="submit">
        Save
      </Button>
      <Button variant="contained" color="success">
        Back
      </Button>
    </FormControl>
  );
}
