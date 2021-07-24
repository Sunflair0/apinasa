const express = require("express");
const router = express.Router();
const { byVentIDv, byUserIDv } = require("../models/ventures.model");


router.get("/tour/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

router.get("/vent/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;