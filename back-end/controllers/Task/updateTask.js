const User = require('../../models/User');
const Counter = require('../../models/Counter');

exports.updateTask = async (req, res) => {

    try {

        let body = req.body;

        let user = User.findOne({ userName: req.body.userName });


        user.userTasks.map((task) => {
            if (task.taskId === req.body.taskId) {
                if (body.description) task.description = body.description
                if (body.completed) task.completed = body.completed
            }
        })

        let doc = await user.save()

        if (doc) {
            res.status(200).json({
                status: true,
                message: `Successfully updated ${body.taskId}`
            })
        } else {
            throw new Error(`Unable to update task ${body.taskId}`)
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }

}