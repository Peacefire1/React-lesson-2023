const express = require("express");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const PORT = 8080;
const app = express();
const upload = multer({ storage: storage });

app.use(express.json());
app.use(cors());

app.use("/uploads", express.static("uploads"));

app.get("/", (request, response) => {
  response.status(200).send("<h1>Day-80 File Upload Multer</h1>");
  const testFolder = "./uploads/";
  const imgs = [];
  fs.readdirSync(testFolder).forEach((file) => {
    console.log(file);
    const imgUrl = `http://localhost:8080/iploads/${file}`;
    imgs.push(imgUrl);
  });
  response.status(200).json({
    data: imgs,
  });
});

app.post("/fileUpload", upload.single("image"), (request, response, next) => {
  const imgs = [];
  const path = "./uploads/";

  fs.readdirSync(path).forEach((file) => {
    console.log(file);
    const fileUrl = `src="http://localhost:8080/uploads/${file}`;
    imgs.push(fileUrl);
  });

  response.json({
    data: imgs,
  });
});

app.listen(PORT, () => {
  console.log(`Application is running on http://localhost:${PORT}`);
});
