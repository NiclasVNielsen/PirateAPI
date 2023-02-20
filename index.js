const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

const treasureRoutes = require("./routes/treasure");

require("dotenv-flow").config();


mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.DBHOST,
    {
        useUnifiedTopology: true,
        useNewUrlParser: true
    }
).catch(error => console.error("🔥 Error connecting to MongoDB: " + error));

mongoose.connection.once('open', () => console.log('Connected to MongoDB'))


// Routes
app.get("/api/aaargh", (req, res) => {
    res.status(200).send({msg: "meep"})
})


// CRUD
app.use("/api/treasure", treasureRoutes);


const port = process.env.PORT || 8000;

app.listen(port, function(){
    console.log("Aaargh!: " + port)
});

module.exports = app;