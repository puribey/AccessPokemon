const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Database
const db = require('./config/database')

//Test db
db.authenticate()
.then(()=> console.log("DB connected"))
.catch(err => console.log('Error:' + err))

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// Get routes from /pokemon
app.use('/pokemon', require('./routes/pokemon'));

const PORT = process.env.PORT || 5050;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
