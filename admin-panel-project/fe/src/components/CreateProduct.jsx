import { TextField } from "@mui/material";

export default function CreateProduct() {
  return (
    <form>
      <h1>New Product</h1>
      <label style={{ fontSize: 30, margin: 50 }}>Iamge: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Title: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Subtitle: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Discount: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Description1: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Description2: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
      <br />
      <br />
      <label style={{ fontSize: 30, margin: 50 }}>Code: </label>
      <TextField
        sx={{ width: 500 }}
        id="filled-basic"
        label="Filled"
        variant="filled"
      />
    </form>
  );
}
