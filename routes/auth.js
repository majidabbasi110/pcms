const express = require("express");
const router = express.Router();

const {
    signup,
    signin,
    signout,
    requireSignin
} = require("../controllers/auth");
const {
    update
} = require("../controllers/user")

const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);
router.post("/update", update)

module.exports = router;
