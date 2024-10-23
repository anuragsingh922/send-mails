const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = 8080;

const { sendEmail } = require("./sendEmail.js");

app.get("/", (req , res)=>{
    res.send("Mail server working fine.");
});
app.post("/", sendEmail);


app.listen(port, () => {
  console.log(`Email Server listening at http://localhost:${port}`);
});
