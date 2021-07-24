const express = require("express");
const router = express.Router();
const { writeTByUser, getAllmyTest,byUserIDt, byTestIDt, patchTByUser, delOneMyTest, delAllMyTest, findTByTtl} = require("../models/favorites.model");


router.get("/user:user_id", (req, res) => {
return byUserIDt(res, req.params.user_id);
});

router.get("/test:test_id", (req, res) => {
return byTestIDt(res, req.params.test_id);
});

router.get("/title:title", (req, res) => {
return findTByTtl(res, req.params.title);
});

router.post("/add", (req, res) => {
const {user_id, title, testimonial} =req.body;
if (user_id && title && testimonial){ 
return writeTByUser(res, user_id, title, testimonial);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to see all testimonials3
router.get("/test/all", (req, res) => {
return byUserIDt(res);
});

// /////I want to see all my testimonials
router.get("/mine/test/all:user_id", (req, res) => {
return getAllmyTest(res);
});

// /////I want to change one of my testimonials
router.patch("/patch/:user_id/:test_id", (req, res) => {
const {user_id, test_id, title, testimonial} =req.params;
if (user_id && test_id && title && testimonial){ 
return patchTByUser(res, user_id, test_id, title, testimonial);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to delete a testimonials
router.delete("/delete/one/mine/:user_id/:test_id", (req, res) => {
const {user_id, test_id} =req.params;
return delOneMyTest(res, user_id, test_id);
});

// /////I want to delete all my testimonials
router.delete("/delete/all/mine/:user_id/:test_id", (req, res) => {
const {user_id, test_id} =req.params;
return delAllMyTest(res, user_id, test_id);
}); 

//!I want to find testimonials by part title
router.get("/title/part", (req, res) => {
return findTByTtl(res, req.params.title);
});


module.exports = router;