const express = require("express");
const session = require('express-session');
const MongoStore = require('connect-mongo').default;
const app = express();
require("dotenv").config()
const PORT = process.env.PORT;
app.set("view engine", "ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public"));

app.get("/", async function(req,res){
    res.send("Hello World!");
})

app.listen(PORT, function(){
    console.log(`Live at http://localhost:${PORT}/`);
})