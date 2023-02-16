console.log("day-63 category CRUD");

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { uuid } = require("uuidv4");

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

    if (isEdit) {
      categoryDataObj.map((category) => {
        if (category.id == body.categoryId) {
          category.name = body.categoryName;
        }
        return category;
      });
    } else {
      const newCategory = {
        id: uuid(),
        name: body.categoryName,
      };
      categoryDataObj.push(newCategory);
    }

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

app.get("/search", (request, response) => {
  console.log(request.query);

  const savedCategories = fs.readFileSync("./data/categories.json", {
    encoding: "utf-8",
    flag: "r",
  });

  const savedCategoriesArrayObject = JSON.parse(savedCategories);

  const foundCategory = savedCategoriesArrayObject.filter(
    // (category) => category.name == request.query.value
    (category) => category.name.includes(request.query.value)
  );

  response.json({
    status: "success",
    data: foundCategory,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
