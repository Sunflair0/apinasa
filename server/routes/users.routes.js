const express = require("express");
const router = express.Router();
const { addFave, deleteFave, byUserID } = require("../models/favorites.model");

router.post("/add", (req, res) => {
  const { user_id, pod } = req.body;
  if (user_id && pod && pod.url && pod.pod_id && pod.title && pod.date && pod.copyright && pod.explanation) {
    return addFave(res, user_id, pod);
  }
  return res.send({
    success: false,
    error: "Invalid data provided",
    data: null,
  });
});

router.delete("/delete/:user_id/:pod_id", (req, res) => {
  const { user_id, pod_id } = req.params;
  return deleteFave(res, user_id, pod_id);
});

router.get("/user/:user_id", (req, res) => {
  return byUserID(res, req.params.user_id);
});

module.exports = router;