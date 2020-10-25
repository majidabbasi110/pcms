const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");

const { create, adminComplaints,photo, complaintbyid } = require("../controllers/complain");
router.post("/:userid/complain/register", create);

router.get("/admincomplaints", adminComplaints);
router.get("/complain/photo/:complainid", photo)
router.param("userid", userById);
router.param("complainid",complaintbyid)
module.exports = router;
