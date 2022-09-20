const express = require("express");
const app = express();
const router = express.Router();

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`);
  }

  res.status(401).send("Please Provide Credentials");
});
console.log("hello this is route");
module.exports = router;
