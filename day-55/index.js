console.log("day-55");
const { request, response } = require("express");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.static("public"));
const PORT = 8082;

const returnHTML = `
    <html>
        <head>
        <title>Hello ExpressJS</title>
        <link href="/style.css" rel="stylesheet">
        </head>
        <body>
            <h1>Hello World</h1>
            <button onClick="alertMe()">Click me</button>
            <script src="/script.js"></script>
        </body>
    </html>
`;

app.get("/", (request, response) => {
  response.send(returnHTML);
});

app.listen(PORT, () => {
  console.log(`Server is runnning on http://localhost:${PORT}`);
});
