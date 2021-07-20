const express = require("express");
const router = express.Router();
const { byUserIDv, byVentIDv } = require("../models/ventures.model");


router.get("/user/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

router.get("id/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;