"use strict";
let Models = require("../models"); // matches index.js
const getRecipes = (res) => {
    // finds all Recipes
    Models.Recipe.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createRecipe = (data, res) => {
    // creates a new Recipe using JSON data POSTed in request body
    console.log(data);
    new Models.Recipe(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateRecipe = (req, res) => {
    // updates the Recipe matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    Models.Recipe.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteRecipe = (req, res) => {
    // deletes the Recipe matching the ID from the param
    Models.Recipe.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// ++ Test updating and deleting a Recipe using Postman
module.exports = {
    getRecipes,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};
