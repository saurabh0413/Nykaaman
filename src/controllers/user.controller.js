
const express = require("express");
const User = require("../models/user.model");

const router = express.Router();


router.post("/otpverify", async (req, res) => {
    let user;
try {
    user = await User.create(req.body);
    console.log(user)
    return res.status(201).render("loginotp");
} catch (err) {
    return res.status(500).send(err.message)
}
});

router.post("/authdone", async (req, res) => {
    try {
         user = await User.create(req.body);
        console.log(user)
        return res.status(201).render("index");
        
    } catch (err) {
        return res.status(500).send(err.message)
    }
    });

router.get("", (req, res) => {
    return res.render("account");
});


router.get("/login", (req, res) => {
    return res.render("login");
});
router.get("/checkuser",  (req, res) => {
   return res.render("signup")
});

module.exports = router;
