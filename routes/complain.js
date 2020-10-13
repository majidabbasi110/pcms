const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { create, adminComplaints } = require("../controllers/complain");
router.post("/:userid/complain/register", create);

router.get("/admincomplaints", adminComplaints);

router.param("userid", userById);
module.exports = router;
