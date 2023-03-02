const mongoose = require('mongoose');

const uri = process.env.DATABASE_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,  useUnifiedTopology: true
})
    .catch((err) => {
        console.log(err)
    })

const connection = mongoose.connection;
connection.on('connected', () => {
console.log('MongoDB connected')
})