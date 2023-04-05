"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
// const cors = require("cors");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const Theaters_api_1 = __importDefault(require("./routes/Theaters-api"));
dotenv_1.default.config();
const PORT = process.env.PORT;
const MONGO_CONNECTION_STRING = process.env.MONGO_CONNECTION_STRING || "mongodb://localhost:27017/test";
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
let name = "<h1>Day-90-Express-TypeScript</h1>";
// let phoneNumber:number = 99119911
// let isMarried: boolean = false
// let sheeps:Array<string> = ["sheep1","sheep2","sheep3",]
// let sheep:string[]=["sheep1","sheep2","sheep3"]
// let sheepObject:{name:string,age:number}={
//   name:"sheep1",
//   age:1
// }
// sheepObject.name = "sheep2"
// sheepObject.age = 3
app.get("/", (req, res) => {
    res.send(name);
});
app.use("/theater", Theaters_api_1.default);
app.listen(PORT, () => {
    mongoose_1.default
        .connect(MONGO_CONNECTION_STRING)
        .then(() => console.log("Database connected succesfully"))
        .catch((error) => console.error(error));
    console.log(`Application is running on http://localhost:${PORT}`);
});
