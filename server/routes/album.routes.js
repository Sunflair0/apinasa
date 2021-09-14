const express = require("express");
const router = express.Router();
const {cAllF, cAllApodF, cAllVentF, addFavA, addFavV, deleteAllFav, delAllApodF, delAllVentF, delOneVentF,delOneApodF} = require("../models/clients.model");

// /////I want to see all album
router.get("/see/vent/:client_id", (req, res) => {
  const { client_id} = req.params;
  return cAllF(res, client_id);
});

// /////I want to see all my apod album
router.get("/see/apod/:client_id/:apod_id", (req, res) => {
  const { client_id, apod_id } = req.params;
  return cAllApodF(res, client_id, apod_id);
});

// /////I want to see all my vent album
router.get("/see/vent/:client_id/:vent_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return cAllVentF(res, client_id, fav_id);
});

// /////I want to add an apod album
router.put("/add/apod/:client_id/:fav_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return addFavA(res, client_id, fav_id);
});

// /////I want to add a vent album
router.put("/add/:client_id/:fav_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return addFavV(res, client_id, fav_id);
});

// /////I want to delete all my album
router.delete("/delete/all/:client_id", (req, res) => {
  const { client_id } = req.params;
  return deleteAllFav(res, client_id);
});

// /////I want to delete all my vent album
router.delete("/delete/all/venture/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delAllVentF(res, client_id, vent_id);
});

// /////I want to delete all my apod album
router.delete("/delete/all/apod/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delAllApodF(res, client_id, vent_id);
});

// /////I want to delete one vent album
router.delete("/delete/venture/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delOneVentF(res, client_id, vent_id);
});

// /////I want to delete one apod album
router.delete("/delete/album/:client_id/:apod_id", (req, res) => {
  const { client_id, apod_id } = req.params;
  return delOneApodF(res, client_id, apod_id);
});

module.exports = router;