const express = require("express");
const { contact, getInTouch } = require("../controller/contactController");
const router = express.Router();

router.post("/contact", contact);

router.post("/inform",getInTouch)

module.exports = router;
