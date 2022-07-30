const express = require("express");
const router = express.Router();
const {cAllF, cAllApodF, cAllVentF, addFavA, addFavV, deleteAllFav, delAllApodF, delAllVentF, delOneVentF,delOneApodF} = require("../models/clients.model");

// /////I want to see all album
router.get("/see/vent/:user_id", (req, res) => {
  const { user_id} = req.params;
  return cAllF(res, user_id);
});

// /////I want to see all my apod album
router.get("/see/apod/:user_id/:apod_id", (req, res) => {
  const { user_id, apod_id } = req.params;
  return cAllApodF(res, user_id, apod_id);
});

// /////I want to see all my vent album
router.get("/see/vent/:user_id/:vent_id", (req, res) => {
  const { user_id, fav_id } = req.params;
  return cAllVentF(res, user_id, fav_id);
});

// /////I want to add an apod album
router.put("/add/apod/:user_id/:fav_id", (req, res) => {
  const { user_id, fav_id } = req.params;
  return addFavA(res, user_id, fav_id);
});

// /////I want to add a vent album
router.put("/add/:user_id/:fav_id", (req, res) => {
  const { user_id, fav_id } = req.params;
  return addFavV(res, user_id, fav_id);
});

// /////I want to delete all my album
router.delete("/delete/all/:user_id", (req, res) => {
  const { user_id } = req.params;
  return deleteAllFav(res, user_id);
});

// /////I want to delete all my vent album
router.delete("/delete/all/venture/:user_id/:vent_id", (req, res) => {
  const { user_id, vent_id } = req.params;
  return delAllVentF(res, user_id, vent_id);
});

// /////I want to delete all my apod album
router.delete("/delete/all/apod/:user_id/:vent_id", (req, res) => {
  const { user_id, vent_id } = req.params;
  return delAllApodF(res, user_id, vent_id);
});

// /////I want to delete one vent album
router.delete("/delete/venture/:user_id/:vent_id", (req, res) => {
  const { user_id, vent_id } = req.params;
  return delOneVentF(res, user_id, vent_id);
});

// /////I want to delete one apod album
router.delete("/delete/album/:user_id/:apod_id", (req, res) => {
  const { user_id, apod_id } = req.params;
  return delOneApodF(res, user_id, apod_id);
});

module.exports = router;