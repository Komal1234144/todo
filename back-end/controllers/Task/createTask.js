const User = require('../../models/User');
const Counter = require('../../models/Counter');

exports.createTask = async (req, res) => {

    try {
        let body = req.body;
        let user = User.findOne({ userName: body.userName });

        var counter = await Counter.findOneAndUpdate({ identifierName: "Task" }, { $inc: { count: 1 } }, { upsert: true, new: true })

        user.userTasks.push({ taskId: `TASK-${counter.count}`, description: body.description, completed: body.completed })

        let doc = await user.save();

        if (doc) {
            res.status(200).json({
                status: true,
                message: 'Task successfully created'
            })
        } else {
            throw new Error(`Unable to create new task`)
        }

    } catch (err) {
        console.log(err)
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }

}