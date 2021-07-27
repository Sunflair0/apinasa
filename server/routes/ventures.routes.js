const express = require("express");
const router = express.Router();
const { byVentIDv, byClientIDv} = require("../models/ventures.model");


router.get("/tour/:client_id", (req, res) => {
return byClientIDv(res, req.params.client_id);
});

router.get("/vent/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;