const express = require("express");
const router = require("router");


router.get("/", (req, res) => {
return res.send();
});

router.get("/test_id", (req, res) => {
return res.send();
});

module.exports = router;