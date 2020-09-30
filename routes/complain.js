const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { create } = require("../controllers/complain");
router.post("/:userid/complain/register", create);

router.param("userid", userById);
module.exports = router;
