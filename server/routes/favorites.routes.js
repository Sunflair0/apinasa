const express = require("express");
const router = express.Router();
const {cAllF, cAllApodF, cAllVentF, addFavA, addFavV, deleteAllFav, delAllApodF, delAllVentF, delOneVentF,delOneApodF} = require("../models/clients.model");

// /////I want to see all favorites
router.get("/see/vent/:client_id", (req, res) => {
  const { client_id} = req.params;
  return cAllF(res, client_id);
});

// /////I want to see all my apod favorites
router.get("/see/apod/:client_id/:apod_id", (req, res) => {
  const { client_id, apod_id } = req.params;
  return cAllApodF(res, client_id, apod_id);
});

// /////I want to see all my vent favorites
router.get("/see/vent/:client_id/:vent_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return cAllVentF(res, client_id, fav_id);
});

// /////I want to add an apod favorite
router.put("/add/apod/:client_id/:fav_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return addFavA(res, client_id, fav_id);
});

// /////I want to add a vent favorite
router.put("/add/:client_id/:fav_id", (req, res) => {
  const { client_id, fav_id } = req.params;
  return addFavV(res, client_id, fav_id);
});

// /////I want to delete all my favorites
router.delete("/delete/all/:client_id", (req, res) => {
  const { client_id } = req.params;
  return deleteAllFav(res, client_id);
});

// /////I want to delete all my vent favorites
router.delete("/delete/all/venture/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delAllVentF(res, client_id, vent_id);
});

// /////I want to delete all my apod favorites
router.delete("/delete/all/apod/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delAllApodF(res, client_id, vent_id);
});

// /////I want to delete one vent favorites
router.delete("/delete/venture/:client_id/:vent_id", (req, res) => {
  const { client_id, vent_id } = req.params;
  return delOneVentF(res, client_id, vent_id);
});

// /////I want to delete one apod favorites
router.delete("/delete/favorite/:client_id/:apod_id", (req, res) => {
  const { client_id, apod_id } = req.params;
  return delOneApodF(res, client_id, apod_id);
});

module.exports = router;