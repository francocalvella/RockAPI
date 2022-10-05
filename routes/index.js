const express = require('express');
const router = express.Router();


router.get("/", (req, res)=>{
  res.render("index", {title: "Rock API"})
})


module.exports = router