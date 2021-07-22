const express = require("express");
const router = express.Router();
const { byUserIDv, byUserIDf, addFavA, addFavT, addFavV, deleteAFav, deleteFavidA, deleteFavidT, deleteFavidV ,deleteByUserID } = require("../models/ventfav,models");

//! get my favorite vent by user
router.get("fav/:fav_id", (req, res) => {
return byUserIDv(res, req.params.fav_id);
});



//! find all favorites for user ID
router.get("/mine/:user_id", (req, res) => {
return byUserIDf(res, req.params.user_id);
});




//! add favorite for Testimonials
router.post("/add", (req, res) => {
  const { user_id, test_id, title, testimonial } = req.body;
  if (user_id  && test.test.id && title && test.testimonial) {
  return addFavT(res, user_id, test_id, title, testimonial);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

//! add favorite for Ventures
router.post("/add", (req, res) => {
  const { user_id, vent_id, tour, description} = req.body;
  if (user_id && vent_id && tour&& description ) {
  return addFavV(res, user_id, vent_id, tour, description);
  }
  return res.send({
    success: false,
    error: "Invalid data provided. Please try other parameters.",
    data: null,
  });
});

//! delete single favorite 
router.delete("/delete/:user_id/:fav_id", (req, res) => {
  const { user_id, fav_id } = req.params;
  return deleteAFav(res, user_id, fav_id);
});

//! delete favorite APOD by for user by ApodID
router.delete("/delete/:user_id/:apod_id", (req, res) => {
  const { user_id, apod_id } = req.params;
  return deleteFavidA(res, user_id, apod_id);
});

//! delete favorite Test by for user by TestID
router.delete("/delete/:user_id/:test_id", (req, res) => {
  const { user_id, test_id } = req.params;
  return deleteFavidT(res, user_id, test_id);
});

//! delete favorite Vent for user by VentID
router.delete("/delete/:user_id/:vent_id", (req, res) => {
  const { user_id, vent_id } = req.params;
  return deleteFavidV(res, user_id, vent_id);
});

//! delete favorites by UserID, will delete everything


router.delete("/delete/:user_id", (req, res) => {
  const { user_id } = req.params;
  return deleteByUserID(res, user_id);
});


module.exports = router;