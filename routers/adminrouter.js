const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.session.username);
  console.log(req.session.position);
  if (req.session.position == "admin") {
    productdata
      .find({})
      .toArray()
      .then((response) => {
        admindata.findOne({ username: req.session.username }).then((user) => {
          res.render("index", { product: response, user: user });
        });
      });
  } else {
    res.redirect("/admin/login");
  }
});
router.get("/addproduct", (req, res) => {
  res.render("addproduct");
});

module.exports = router;
