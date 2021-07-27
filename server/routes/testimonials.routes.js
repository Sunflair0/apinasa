const express = require("express");
const router = express.Router();
const { writeTByclient, getAllmyTest,byclientIDt, byTestIDt, patchTByclient, delOneMyTest, delAllMyTest, findTByTtl} = require("../models/favorites.model");


router.get("/client:client_id", (req, res) => {
return byclientIDt(res, req.params.client_id);
});

router.get("/test:test_id", (req, res) => {
return byTestIDt(res, req.params.test_id);
});

router.get("/title:title", (req, res) => {
return findTByTtl(res, req.params.title);
});

router.post("/add", (req, res) => {
const {client_id, title, testimonial} =req.body;
if (client_id && title && testimonial){ 
return writeTByclient(res, client_id, title, testimonial);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to see all testimonials3
router.get("/test/all", (req, res) => {
return byclientIDt(res);
});

// /////I want to see all my testimonials
router.get("/mine/test/all:client_id", (req, res) => {
return getAllmyTest(res);
});

// /////I want to change one of my testimonials
router.patch("/patch/:client_id/:test_id", (req, res) => {
const {client_id, test_id, title, testimonial} =req.params;
if (client_id && test_id && title && testimonial){ 
return patchTByclient(res, client_id, test_id, title, testimonial);
}
return res.send({
success: false,
error: "Invalid Data Entered",
data: null,});
});

// /////I want to delete a testimonials
router.delete("/delete/one/mine/:client_id/:test_id", (req, res) => {
const {client_id, test_id} =req.params;
return delOneMyTest(res, client_id, test_id);
});

// /////I want to delete all my testimonials
router.delete("/delete/all/mine/:client_id/:test_id", (req, res) => {
const {client_id, test_id} =req.params;
return delAllMyTest(res, client_id, test_id);
}); 

//!I want to find testimonials by part title
router.get("/title/part", (req, res) => {
return findTByTtl(res, req.params.title);
});


module.exports = router;