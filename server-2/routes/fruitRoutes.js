let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all Fruits
router.get("/", (req, res) => {
    Controllers.fruitController.getFruits(res);
});
// Adds a POST route to create a new Fruit
router.post("/create", (req, res) => {
    Controllers.fruitController.createFruit(req.body, res);
});
router.put("/:id", (req, res) => {
    Controllers.fruitController.updateFruit(req, res);
});
router.delete("/:id", (req, res) => {
    Controllers.fruitController.deleteFruit(req, res);
});

module.exports = router;
