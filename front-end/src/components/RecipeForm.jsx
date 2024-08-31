import { useState } from "react";
import axios from "axios";

const RecipeForm = () => {
    //set states using backend model for recipes
    const [title, setTitle] = useState("");
    const [time, setTime] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [methods, setMethods] = useState("");
    const [categories, setCategories] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        //create recipe object for submission
        const recipe = {
            title,
            time,
            imageUrl,
            methods: methods.split(",").map((method) => method.trim()),
            categories: categories
                .split(",")
                .map((category) => category.trim()),
            ingredients: ingredients
                .split(",")
                .map((ingredient) => ingredient.trim()),
            instructions: instructions
                .split(";")
                .map((instruction) => instruction.trim()),
        };
        //post to mongo db
        try {
            await axios.post(
                "http://localhost:3030/api/recipes/create",
                recipe
            );
            alert("Recipe submitted successfully");
        } catch (error) {
            alert("Failed to submit recipe");
            console.error(error);
        }
    };
    //form for submiting recipes
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Recipe Name:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="imageUrl">Recipe Image URL:</label>
                <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="time">Time Required:</label>
                <input
                    type="text"
                    id="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="methods">Methods (comma separated):</label>
                <textarea
                    id="methods"
                    value={methods}
                    onChange={(e) => setMethods(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="categories">
                    Categories (comma separated):
                </label>
                <textarea
                    id="categories"
                    value={categories}
                    onChange={(e) => setCategories(e.target.value)}
                ></textarea>
            </div>
            <div>
                <label htmlFor="ingredients">
                    Ingredients (comma separated):
                </label>
                <textarea
                    id="ingredients"
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="instructions">
                    Instructions: (semi-colon separated)
                </label>
                <textarea
                    id="instructions"
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit Recipe</button>
        </form>
    );
};

export default RecipeForm;
