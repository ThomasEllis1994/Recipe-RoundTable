const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const fruitSchema = new Schema({
    name: { type: String, trim: true, required: true },
    fruitId: { type: String, trim: true },
    family: { type: Array, trim: true },
    order: { type: String },
    genus: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("fruit", fruitSchema);

// [{"name":"Persimmon","id":52,"family":"Ebenaceae","order":"Rosales","genus":"Diospyros","nutritions":{"calories":81,"fat":0.0,"sugar":18.0,"carbohydrates":18.0,"protein":0.0}}
