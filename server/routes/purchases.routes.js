const express = require("express");
const router = express.Router();
const { addPurch, byClientIDv, delOnePurch, addIntraPurch } = require("../models/purchases.model");


// /////I want to buy this
router.put("/add", (req, res) => {
const {client_id, vent_id} =req.body;
if (client_id && vent_id){ 
return addPurch(res, client_id, vent_id);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});




// /////I want to see what venture I have I bought
router.get("/see/:client_id", (req, res) => {
return byClientIDv(res, req.params.client_id); 
});

// /////I want to buy intra-net
router.put("/add", (req, res) => {
const {client_id, intra_net_id} =req.body;
if (client_id && intra_net_id){ 
return addIntraPurch(res, client_id, intra_net_id);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to delete what I bought
router.delete("/delete/:client_id/:vent_id", (req,res)=> {
const {client_id, vent_id} =req.params;
return delOnePurch(res, client_id, vent_id);
});


module.exports = router;