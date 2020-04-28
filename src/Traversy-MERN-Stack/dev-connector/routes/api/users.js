const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// #route GET api/users
// @desc  Test route
// @access Public

// router.get('/', (req, res) => res.send('Users route'));

router.post(
    "/",
    [
      check("name", "Name is requried")
        .not()
        .isEmpty(),
      check("email", "Please include a valid email").isEmail(),
      check("password", "Password must be 6 or more characters").isLength({
        min: 6
      })
    ],
    (req, res) => {
      console.log(req.body);
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      res.send("User registered ...");
    }
  );

module.exports = router;