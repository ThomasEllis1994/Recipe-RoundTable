let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); // index.js

// Adds a GET route to return all recipes
router.get("/", (req, res) => {
    Controllers.recipeController.getRecipes(res);
});
// Adds a POST route to create a new recipe
router.post("/create", (req, res) => {
    Controllers.recipeController.createRecipe(req.body, res);
});
router.put("/:id", (req, res) => {
    Controllers.recipeController.updateRecipe(req, res);
});
router.delete("/:id", (req, res) => {
    Controllers.recipeController.deleteRecipe(req, res);
});

module.exports = router;
