const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/", async function(req,res){
    res.render("wtnc");
})

module.exports = router;