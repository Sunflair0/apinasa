const express = require("express");
const router = express.Router();
const {oneTour, allTours} = require("../models/ventures.model");


router.get("/tour/all", (req, res) => {
return allTours(res, req.params.tour); 
});

router.get("/tour/:tour_id", (req, res) => {
return oneTour(res, req.params.tour);
});


module.exports = router;