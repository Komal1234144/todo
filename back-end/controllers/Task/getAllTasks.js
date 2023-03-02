const User = require('../../models/User');
const Counter = require('../../models/Counter');

exports.getAllTasks = async (req, res) => {

    try {

        let body = req.body;

        let user = User.findOne({ userName: req.param.userName });


        let taskList = user.userTasks

        if (taskList.length === 0) {
            res.status(200).json({
                status: true,
                message: 'No Tasks found'
            })
        } else {
            res.status(200).json({
                status: true,
                tasks : taskList
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