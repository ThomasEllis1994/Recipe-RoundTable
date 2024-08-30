const express = require("express");
let dbConnect = require("./dbConnect");
const cors = require("cors");
require("dotenv").config();

const Controllers = require("./controllers");

const app = express();
// parse requests of content-type - application / json;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to myMongoDB application." });
});

const userRoutes = require("./routes/userRoutes");
app.use("/api/users", userRoutes);

const recipeRoutes = require("./routes/recipeRoutes");
app.use("/api/recipes", recipeRoutes);

const fruitRoutes = require("./routes/fruitRoutes");
app.use("/api/fruits", fruitRoutes);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
    Controllers.fruitController.populateFruits();
});
