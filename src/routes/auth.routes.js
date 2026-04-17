const express = require('express');
const authController = require('../controllers/auth.conrtroller');

const router = express.Router();

router.post('/register', authController.resgisterUser)

router.get('/test', (req,res) => {
    console.log("cookies: ", req.cookies);
    res.json({
        message: "Test route",
        cookies: req.cookies
    })
    
})

module.exports = router;