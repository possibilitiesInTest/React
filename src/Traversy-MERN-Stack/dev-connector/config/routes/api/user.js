const express = require("express");
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../../models/user');

// @route GET api/users
// @desc  Test route
// @access Public

router.post(
    '/',

    [
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid').isEmail(),
        check('password', 'Please enter a password').isLength({ min: 6 })
    ],

    (req, res) => {
    
        const errors = validationResult(req);
    
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { name, email, password } = req.body;

        // See if user exists
        try {
            let user = await User.findOne({ email });
            if(user) {
                res.status(400).json({ errors: [{ msg: 'User already exists'}] });
            }

        // Get users gravatar
            const avatar = gravatar.url(email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            });

            user = new User({
                name,
                email,
                avatar,
                password
            });

        // Encrypt password using bcrypt
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
            await user.save();

        // Return jsonwebtoken
        
            const payload = {
                user: {
                    id: user.id
                }
            }

            jwt.sign(payload, config.get('jwtSecret'),
            {expiresIn: 36000},
            (err, token) => {
                if(err) throw err;
                res.json({ token });
            }
            );
        
        } catch(err) {
                console.error(err.message);
                res.status(500).send('Server error');
            }
        }
    
);


router.get("/", (req, res) => res.send("User route"));

module.exports = router;