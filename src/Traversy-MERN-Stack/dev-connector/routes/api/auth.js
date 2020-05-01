const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

// #route GET api/users
// @desc  Test route
// @access Public

// verify main route with middleware check for auth token
router.get("/", auth, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select("password");
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });

// READ existing USER route: SIGNIN
// post req to api/auth
//      passing: email, password,
//      err. invalid creds, user/pw,
//      valid user/pw, returns token
router.post(
    "/",
    [
      check("email", "Please include a valid email").isEmail(),
      check("password", "Password is required").exists()
    ],
    async (req, res) => {
      console.log(req.body);
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      const { email, password } = req.body;
  
      try {
        // see if user exists
        let user = await User.findOne({ email });
  
        // if user has not recognized, err: invalid creds
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
  
        // compare user credentials
        const isMatch = await bcrypt.compare(password, user.password);
  
        if (!isMatch) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }
  
        // return jsonwebtoken
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          { expiresIn: 3600 },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
  
        // res.send("User registered ...");
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server error");
      }
    }
  );

module.exports = router;