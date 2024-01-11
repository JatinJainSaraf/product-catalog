const express = require("express");
const app = express();
const cors = require("cors");
const env = require('dotenv')
require('dotenv').config();


app.use(cors());

const PORT = process.env.PORT || 9000;

app.get("/api/home", (req: any, res: { json: (arg0: { message: string; name: string[]; }) => void; }) => {
  res.json({ message: "Hello World from Server Side. Please find the Product List Below:-", name: ["Mobile", "TV", "AC", "Tab", "Laptop"] });
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});