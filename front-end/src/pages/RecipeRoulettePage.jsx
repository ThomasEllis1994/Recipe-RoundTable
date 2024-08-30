import React from "react";
import useRecipeRoulette from "../hooks/useRecipeRoulette";

const RecipeRoulettePage = () => {
    const { recipe, loading, error, getRandomRecipe } = useRecipeRoulette();

    // Trigger the fetch when the component mounts
    React.useEffect(() => {
        getRandomRecipe();
    }, [getRandomRecipe]);

    return (
        <div>
            <button onClick={getRandomRecipe} disabled={loading}>
                {loading ? "Loading..." : "Get Random Recipe"}
            </button>
            {error && <p>Error: {error}</p>}
            {recipe && (
                <div>
                    <h1>{recipe.title}</h1>
                    <p>{recipe.description}</p>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                    <p>{recipe.instructions}</p>
                </div>
            )}
        </div>
    );
};

export default RecipeRoulettePage;
