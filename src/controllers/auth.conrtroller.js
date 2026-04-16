const userModel = require('../models/user.model');

async function resgisterUser(req,res) {
    const {username, email, password} = req.body;
}

module.exports = {resgisterUser}