const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/apiRoutes");
const app = express();
const PORT = process.env.PORT || 3005;
const path = require("path");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
} else {
    app.use(express.static("client/public"));
    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'public', 'index.html'))
    })
}

// Add routes, both API and view
app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

// Start the API server

app.listen(PORT, function () { console.log(`APP lsitening on PORT ${PORT}`) })
