const express = require("express");
const router = express.Router();
const { ventmenu } = require("../models/menu.ventmodel");


// /////I want to see all my images and tours
router.get("/ventures/menu2/all", (req,res) => { 
const {img} = req.params;
return ventmenu(res, img);
});



module.exports = router;