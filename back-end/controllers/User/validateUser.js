const User = require('../../models/User');
const jwt = require('jsonwebtoken')

exports.validateUser = async (req, res) => {

    try {
        let user = req.body;
        const userFound = User.findOne({ userName: user.userName });

        if (!userFound) {
            throw new Error(`Wrong Username provided`)
        }

        if (userFound.password != user.password) {
            throw new Error(`Wrong password provided`)
        }

        let token = jwt.sign({ userName: user.userName }, process.env.JWT_KEY, { expiresIn: "8h" });
        return res.status(200).json({
            status: true,
            message: 'Successfully logged in',
            token
        })

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}