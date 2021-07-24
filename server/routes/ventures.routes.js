const express = require("express");
const router = express.Router();
const { byVentIDv } = require("../models/ventures.model");


<<<<<<< HEAD
// ///// info of Vent by ventID
=======
router.get("/tour/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

>>>>>>> master
router.get("/vent/:vent_id", (req, res) => {
return byVentIDv(res, req.params.vent_id); 
});

module.exports = router;