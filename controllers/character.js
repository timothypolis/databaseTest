const express = require("express");
const db = require("../models");
const router = express.Router();

router.get("/:id", async function(req,res){
    const foundCharacter = await db.Character.findById(req.params.id);
    res.render("character", {character:foundCharacter});
})

router.post("/:id/stat/:index", async function(req,res){
    let statValueArray = [req.body.statValue]
    const foundCharacter = await db.Character.findOneAndUpdate(
        {_id: req.params.id, 
        characterStats: {$elemMatch: {stat: "Intelligence"}}
        },
        {
            $set: {"characterStats.$.statValue": statValueArray}
        }
        );
    res.redirect(`/character/${req.params.id}`);
})

module.exports = router;