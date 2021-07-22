const express = require("express");
const router = express.Router();
const { byUserIDv } = require("../models/purchases.model");



// /////what vent/s do I have?
router.get("/purchases/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id); 
});

module.exports = router;