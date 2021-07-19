const express = require("express");
let router = express.Router();

router
	.route("/")
	.get((req, res) => {
res.send();
})


router
	.route("/ventid")
	.get((req, res) => {
res.send();
})
	.put((req, res) => {
res.send();
})
	.delete((req, res) => {
res.send();
})

module.exports = router;