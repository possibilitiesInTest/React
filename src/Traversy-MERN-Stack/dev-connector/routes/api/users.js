const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator');

const User = require('../../models/User');

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
    async (req, res) => {
      console.log(req.body);
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
  
      const {name, email, password} = req.body;

      
      try {
      // See if user exists
      let user = await User.findone({ email });

      if(user) {
        res.status(400).json({ errors: [{ msg: 'User already exists' }] });
      }

      // Get users gravatar
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      // Create New User Instance
      user = new User({
        name,
        email,
        avatar,
        password
      });

      // Encrypt Password
        // create salt to hash pw w. rounds
        const salt = await bcrypt.genSalt(10);

        // hash user pw w. bcrypt salt
        user.password = await bcrypt.hash(password, salt);

      // Save user to db
      await user.save();

      // Return jsonwebtoken



      res.send("User registered ...");
      } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
    
    }
  );

module.exports = router;