import { useState, useEffect } from "react";
import axios from "axios";
export const useFetchRecipes = () => {
    //set states used to ensure data is fetched
    const [recipeData, setRecipeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios
            .get("http://localhost:3030/api/recipes")
            .then((recipes) => {
                setRecipeData(recipes.data.data);
            })
            .catch((err) => setError(err))
            .finally(setIsLoading(false));
    }, []);
    //return data needed to use hook
    return { recipeData, isLoading, error };
};
