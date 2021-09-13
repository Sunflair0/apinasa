const express = require("express");
const router = express.Router();
const { byClientIDv, byClientIDf, delOneventf, delAllventf } = require("../models/ventfav.model");

// /////I want to see all the ventures I have chosen
router.get("/mine/:client_id", (req, res) => {
return byClientIDv(res, req.params.client_id);
});

// /////I want to add a venture to look at later
router.post("/add/:client_id", (req, res) => {
  const { client_id, vent_id, tour, description} = req.body;
  if (client_id && vent_id && tour&& description ) {
  return byClientIDf(res, client_id, vent_id, tour, description);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

// /////I want to delete off my vent personal list
router.delete("/delete/one/:client_id/:vent_id", (req,res)=> {
const {client_id, vent_id} =req.params;
return delOneventf(res, client_id,vent_id);
});

// /////I want to clear my personal vent list
router.delete("/delete/all/:client_id", (req,res)=> {
const {client_id} =req.params;
return delAllventf(res, client_id);
});

module.exports = router;
