const express = require("express");
const router = express.Router();
const { byUserIDv, byUserIDf, delOneventf, delAllventf } = require("../models/ventfav,models");

// /////I want to see all the ventures I have chosen
router.get("/mine/:user_id", (req, res) => {
return byUserIDv(res, req.params.user_id);
});

// /////I want to add a venture to look at later
router.post("/add/:user_id", (req, res) => {
  const { user_id, vent_id, tour, description} = req.body;
  if (user_id && vent_id && tour&& description ) {
  return byUserIDf(res, user_id, vent_id, tour, description);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

// /////I want to delete off my vent personal list
router.delete("/delete/one/:vent_id", (req,res)=> {
const {vent_id} =req.params;
return delOneventf(res, vent_id);
});

// /////I want to clear my personal vent list
router.delete("/delete/all/:user_id", (req,res)=> {
const {vent_id} =req.params;
return delAllventf(res, vent_id);
});


