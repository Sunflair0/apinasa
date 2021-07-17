const express = require("express");

let router = express.Router();

router.use(function(req,res, next){
console.log(req.url, "@",Date.now());
next();
});