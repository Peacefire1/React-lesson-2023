const express = require("express");
const Users = require("../models/Users");
const bcrypt = require("bcrypt");
const adminRouter = express.Router();
const jwt = require("jsonwebtoken");
const UserRole = require("../models/UserRole");

adminRouter.post("/register", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  if (data) {
    const oldUser = await Users.findOne({ email: data.email });
    if (oldUser) {
      return res.status(400).json({
        success: false,
        status: "Хэрэглэгч аль хэдийн үүссэн байна. Нэвтэрч орно уу.",
      });
    }
    console.log(data.password);
    var hashedPassword = await bcrypt.hash(data.password, 10);

    data.password = hashedPassword;

    try {
      const user = await Users.create(data);
      const result = await user.populate("userrole");
      res.status(201).json({
        message: "Хэрэглэгч амжилттай үүслээ",
        data: result,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: error,
      });
    }
  } else {
    return res.json({
      error: "The input field is empty",
    });
  }
});
// adminRouter.post("/register", async (request, response) => {
//   const data = request.body;
//   const oldUser = Users.findOne({ email: data.email });
//   console.log(oldUser);
//   if (!oldUser) {
//     console.log(data.password);
//     const hashedPassword = await bcrypt.hash(data.password, 10);
//     data.password = hashedPassword;

//     try {
//       const user = await Users.create({
//         data,
//       }).then(() => {
//         response.status(200).json({
//           message: "Хэрэглэгч амжилттай үүслээ",
//           data,
//         });
//         return;
//       });
//     } catch (error) {
//       response.status(500).json({
//         success: false,
//         error,
//       });
//     }
//   } else {
//     return response.json({ error: "Input field is empty" });
//   }
// });
adminRouter.post("/login", async (request, response) => {
  const body = request.body;
  console.log(body);

  try {
    // 1. email, password -g request body dotroos destructure hiij avah
    const { email, password } = request.body;

    //2.if condition deer n email password ali neg n bhgui bol response 400 "utguudiig buren oruulnuu"

    if (!email && !password) {
      return response.status(400).json({
        message: "Utguudiig buten oruulnuu",
      });
    }

    // 3. hereglegchiig email -r n olno gehdee findOne funkts ashiglaadd await oroltsuulan user gedeg variable dotor hadgalnuu

    const user = await Users.findOne({ email });
    console.log("user:", user);

    // 4. bcrypt oruul irsen bh ystei bcrypt.compare gedeg funkts ashiglan password , user.password 2iig adilhan bnu gej shalgaad tuuniigee isMatch gedeg var dotor await ashiglan hadgalnuu
    // console.log(user);
    const isMatch = await bcrypt.compare(password, user?.password);

    // 5. if condition dotor n user bolon isMatch 2 uulaa bga uyed bas isMatch true uyed

    if (user && isMatch) {
      // 6. ehleed jwtBody gedeg const zarlaad tuund user_id:user._id tegeed email:email gdg object ugnu uu

      const jwtBody = {
        user_id: user._id,
        email: email,
      };
      // 7. token gedeg const zarlaad tuund jwt

      const token = jwt.sign(jwtBody, "MySuperDuperPrivateKey", {
        expiresIn: "24h",
      });

      return response.status(200).json({
        success: true,
        token: token,
      });
    } else {
      return response.status(400).json({
        message: "ajilahgui bn",
      });
    }
  } catch (error) {
    response.status(500).json({
      data: "aldaa",
      error: error,
    });
  }
});

adminRouter.post("/role/create", async (request, response) => {
  const { name } = request.body;

  const result = await UserRole.create({ name });

  response.status(200).json({
    data: result,
  });
});

adminRouter.get("/role/list", async (request, response) => {
  const result = await UserRole.find({});
  response.status(200).json({
    data: result,
  });
});

module.exports = adminRouter;
