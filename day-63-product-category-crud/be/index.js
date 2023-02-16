console.log("day-63 category CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");
const { request } = require("http");
const { response } = require("express");

const PORT = 8081;

const app = express();
app.use(cors());
app.use(express.json());

app
  .route("/category")
  .post((request, response) => {
    const body = request.body;
    const isEdit = body.isEdit;

    console.log(body);

    const categoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const categoryDataObj = JSON.parse(categoryData);

    const newCategory = {
      id: uuid(),
      name: body.catName,
    };

    categoryDataObj.push(newCategory);
    const writeCategoryData = fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(categoryDataObj)
    );
    if (writeCategoryData) {
      response.json({
        status: "File write Error",
        data: [],
      });
    } else {
      response.json({
        status: "success",
        data: categoryDataObj,
      });
    }
  })
  .get((request, response) => {
    const readCategoryData = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    response.json({
      status: "success",
      data: JSON.parse(readCategoryData),
    });
  })
  .delete((request, response) => {
    const body = request.body;
    console.log(body);

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const savedCategoriesObject = JSON.parse(savedCategories);

    const filterdCategories = savedCategoriesObject.filter(
      (category) => category.id != body.categoryId
    );

    console.log(filterdCategories);

    fs.writeFileSync(
      "./data/categories.json",
      JSON.stringify(filterdCategories)
    );

    response.json({
      status: "success",
      data: filterdCategories,
    });
  })
  .put((request, response) => {
    const { categoryId } = request.body;

    const savedCategories = fs.readFileSync("./data/categories.json", {
      encoding: "utf-8",
      flag: "r",
    });

    const savedCategoriesObjectArray = JSON.parse(savedCategories);
    const foundCategory = savedCategoriesObjectArray.filter(
      (category) => category.id == categoryId
    )[0];

    response.json({
      status: "success",
      data: foundCategory,
    });
  });

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
