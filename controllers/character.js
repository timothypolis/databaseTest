const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/:id", async function(req,res){
    const foundCharacter = await db.Character.findById(req.params.id);
    res.render("character", {character:foundCharacter});
})

module.exports = router;