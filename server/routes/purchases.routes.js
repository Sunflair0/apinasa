const express = require("express");
const router = express.Router();
const { addPurch, byUserIDv, delOnePurch } = require("../models/purchases.model");



// /////I want to buy this
router.put("/add", (req, res) => {
const {user_id, vent_id} =req.body;
if (user_id && vent_id){ 
return addPurch(res, user_id, vent_id);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to see what have I bought
router.get("/see/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

// /////I want to delete what I bought
router.delete("/delete/:user_id/:vent_id", (req,res)=> {
const {user_id, vent_id} =req.params;
return delOnePurch(res, user_id, vent_id);
});


module.exports = router;