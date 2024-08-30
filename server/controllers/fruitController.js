const axios = require("axios");
const { Fruit } = require("../models");
const Models = require("../models");

async function populateFruits() {
    const { data: fruitData } = await axios.get(
        "https://fruityvice.com/api/fruit/all"
    );

    for (const fruit of fruitData) {
        const filter = { fruitId: fruit.id };
        const newFruit = {
            fruitId: fruit.id,
            name: fruit.name,
            family: fruit.family,
            order: fruit.order,
            genus: fruit.genus,
        };

        await Fruit.findOneAndUpdate(filter, newFruit, {
            new: true,
            upsert: true,
        });
    }
}
const getFruits = (res) => {
    // finds all Fruits
    Models.Fruit.find({})
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const createFruit = (data, res) => {
    // creates a new Fruit using JSON data POSTed in request body
    console.log(data);
    new Models.Fruit(data)
        .save()
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};

const updateFruit = (req, res) => {
    // updates the Fruit matching the ID from the param using JSON data POSTed in request body
    console.log(req.body);
    Models.Fruit.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
const deleteFruit = (req, res) => {
    // deletes the Fruit matching the ID from the param
    Models.Fruit.findByIdAndDelete(req.params.id)
        .then((data) => res.send({ result: 200, data: data }))
        .catch((err) => {
            console.log(err);
            res.send({ result: 500, error: err.message });
        });
};
// ++ Test updating and deleting a Fruit using Postman
module.exports = {
    getFruits,
    createFruit,
    updateFruit,
    deleteFruit,
    populateFruits,
};
