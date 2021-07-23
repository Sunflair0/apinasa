const express = require("express");
const router = express.Router();
const { byVentIDv } = require("../models/ventures.model");


// ///// info of Vent by ventID
router.get("/vent/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;