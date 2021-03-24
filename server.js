const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
const ctrl = require("./controllers");
const db = require("./models");

app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.use("/character", ctrl.character);
app.get("/", async function(req,res){
    res.render("main");
})

app.listen(PORT, function(){
    console.log(`Live at http://localhost:${PORT}/`);
})