const User = require('../../models/User');

exports.createUser = async (req, res) => {

    try {

        const user = new User(req.body);
        let doc = await user.save()

        if (doc) {
            return res.status(200).json({
                status: true,
                user
            })
        }
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}