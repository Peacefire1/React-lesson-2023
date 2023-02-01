import * as React from "react";
import { DataGrid, GridLinkOperator } from "@mui/x-data-grid";
import { Avatar, Button } from "@mui/material";
import { Link } from "react-router-dom";
export default function UsersTable() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "Images",
      headerName: "Image",
      width: 130,
      renderCell: (params) => {
        console.log(params);
        return (
          <>
            <Avatar src={params.row.Images} />
            {/* {params.row.firstName} */}
          </>
        );
      },
    },
    {
      field: "title",
      headerName: "Title",
      width: 100,
    },
    {
      field: "Subtitle",
      headerName: "Subtitle",
      type: "number",
      width: 140,
    },
    {
      field: "Price",
      headerName: "Price",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
    },
    {
      field: "Action",
    },
  ];

  const rows = [
    {
      id: 1,
      Images: "images/daniel.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 2,
      Images: "images/elliot.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 3,
      Images: "images/jenny.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 4,
      Images: "images/steve.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 5,
      Images: "images/stevie.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 6,
      Images: "images/molly.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 7,
      Images: "images/mathhew.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 8,
      Images: "images/kristy.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
    {
      id: 9,
      Images: "images/helen.jpg",
      Price: "$45",
      Subtitle: "Trainers In Blue",
      title: "Boots",
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <Link to={"/users/product"}>
        <Button className="button" variant="contained" color="success">
          CREATE PRODUCT
        </Button>
      </Link>

      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
