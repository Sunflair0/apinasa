const express = require("express");
const router = express.Router();
const { byUserIDt, byTestIDt, findTByTtl, writeTByUser, patchTByUser, deleteTByUser } = require("../models/favorites.model");


router.get("/:user_id", (req, res) => {
return byUserIDt(res, req.params.user_id);
});

router.get("/:test_id", (req, res) => {
return byTestIDt(res, req.params.test_id);
});

router.get("/:title", (req, res) => {
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

///// see about this one w
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

router.delete("/delete/:user_id/:test_id", (req, res) => {
const {user_id, test_id} =req.params;
return deleteTByUser(res, user_id, test_id);
}); 

module.exports = router;