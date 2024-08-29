import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchRecipes = () => {
    const [recipeData, setRecipeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:3030/api/recipes")
            .then((recipes) => {
                setRecipeData(recipes.data.data);
            })
            .catch((err) => setError(err))
            .finally(setLoading(false));
    }, []);
    return { recipeData, loading, error };
};
