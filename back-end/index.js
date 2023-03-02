const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();
require('./config/db')

const app = express();
app.use(express.static(__dirname + '/public'))
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 8050;

app.listen(port , ()=>{
    console.log(`server is running on port :: ${port}`)
})

