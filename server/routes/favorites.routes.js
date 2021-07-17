const express = require("express");
const router = express.Router();
const { addFav, deleteFav, byUserID } = require("../models/favorites.model");

router.put("/add", (req, res) => {
  const { user_id, pod } = req.body;
  if (user_id && pod && pod.url && pod.pod_id && pod.title && pod.date && pod.copyright && pod.explanation) {
  return addFav(res, user_id,test);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

router.post("/add", (req, res) => {
  const { user_id, test } = req.body;
  if (user_id && test && test.test.id) {
  return addFav(res, user_id, test);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

router.post("/add", (req, res) => {
  const { user_id, vent } = req.body;
  if (user_id && vent && vent.vent_id) {
  return addFav(res, user_id, vent);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});



router.delete("/delete/:user_id/:pod_id", (req, res) => {
  const { user_id, pod_id } = req.params;
  return deleteFav(res, user_id, pod_id);
});


router.delete("/delete/:user_id/:test_id", (req, res) => {
  const { user_id, test_id } = req.params;
  return deleteFav(res, user_id, test_id);
});


router.delete("/delete/:user_id/:vent_id", (req, res) => {
  const { user_id, vent_id } = req.params;
  return deleteFav(res, user_id, vent_id);
});

router.get("/user/:user_id", (req, res) => {
  return byUserID(res, req.params.user_id);
});

module.exports = router;
