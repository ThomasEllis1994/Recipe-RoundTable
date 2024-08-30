import { useState, useCallback } from "react";

// Function to simulate fetching recipes from an API
const fetchRecipes = async () => {
    // Replace this URL with your actual API endpoint
    const response = await fetch("http://localhost:3030/api/recipes");
    const data = await response.json();
    return data.data; // Adjust based on your API response
};

// Custom hook
const useRecipeRoulette = () => {
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getRandomRecipe = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const recipes = await fetchRecipes();
            if (recipes.length === 0) {
                throw new Error("No recipes found");
            }
            const randomIndex = Math.floor(Math.random() * recipes.length);
            setRecipe(recipes[randomIndex]);
        } catch (err) {
            setError(err.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }, []);

    return { recipe, loading, error, getRandomRecipe };
};

export default useRecipeRoulette;
