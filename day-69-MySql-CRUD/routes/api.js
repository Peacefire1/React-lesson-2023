import express, { request, response } from "express";
const apiRouter = express.Router();
// const emp_router = express.Router();
// import {
//   getEmployees,
//   hireEmployee,
//   getMaxNo,
//   fireEmployee,
//   updateEmployee,
// } from "../servecis/employee-servecis.js";

// emp_router.get("/employees", async (request, response) => {
//   const result = await getEmployees();
//   response.status(200).send(result);
// });

// emp_router.post("/employee", async (request, response) => {
//   const body = request.body;
//   //   console.log(body);
//   const { birthDate, firstName, lastName, gender, hireDate } = request.body;

//   const { max } = await getMaxNo();
//   console.log(max);
//   const result = await hireEmployee(
//     max + 1,
//     birthDate,
//     firstName,
//     lastName,
//     gender,
//     hireDate
//   );
//   console.log(result);
//   response.status(200).send({});
// });

// emp_router.put("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);
//   const result = await updateEmployee(body.empNo, body.lastName, body.gender);
//   response.status(200).send(result);
// });

// emp_router.delete("/employee", async (request, response) => {
//   const body = request.body;
//   console.log(body);

//   const result = await fireEmployee(body.empNo);

//   response.status(200).send(result);
// });

import { getPopularCategories } from "../servecis/category-services.js";
import {
  getChildrentMenus,
  getParentMenus,
} from "../servecis/menus-services.js";
import { getAllProducts, search } from "../servecis/product-services.js";

apiRouter.get("/popular", async (request, response) => {
  const result = await getPopularCategories();
  response.status(200).send(result);
});

apiRouter.get("/menus", async (request, response) => {
  const parentMenus = await getParentMenus();
  await Promise.all(
    parentMenus.map(async (parent) => {
      const children = await getChildrentMenus(parent.id);
      parent.children = children;
      return parent;
    })
  );
  //   console.log([]);
  response.status(200).send(parentMenus);
});

apiRouter.get("/search", async (request, response) => {
  const keyword = request.query.keyword;
  const result = await search(keyword);
  response.status(200).send(result);
});
apiRouter.get("/products", async (request, response) => {
  const result = await getAllProducts();
  response.status(200).send(result);
});

export default apiRouter;
