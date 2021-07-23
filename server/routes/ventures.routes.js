const express = require("express");
const router = express.Router();
const { byUserIDv, byVentIDv } = require("../models/ventures.model");


// ///// what vent/s do I have?
router.get("/user/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

// ///// info of Vent by ventID
router.get("/vent/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;