import React from "react";
import useRecipeRoulette from "../hooks/useRecipeRoulette";
import { useState } from "react";

const RecipeRoulettePage = () => {
    const { recipe, loading, error, getRandomRecipe } = useRecipeRoulette();
    const [isVisible, setIsVisible] = useState(false);

    // Step 2: Button click handler
    const handleButtonClick = () => {
        setIsVisible(true);
    };

    // Trigger the fetch when the component mounts
    React.useEffect(() => {
        getRandomRecipe();
    }, [getRandomRecipe]);

    return (
        <div className="rouletteContainer">
            <button
                className="randomRecipe"
                onClick={() => {
                    getRandomRecipe();
                    handleButtonClick();
                }}
                disabled={loading}
            >
                {loading ? "Loading..." : "Play Recipe Roulette"}
            </button>
            {error && <p>Error: {error}</p>}
            {recipe && isVisible && (
                <div className="rouletteAnswer">
                    <h1 className="recipeItem1">{recipe.title}</h1>
                    <div className="recipeItem1 imageContainer leftRecipe">
                        <img
                            className="recipePageImage"
                            src={recipe.imageUrl}
                            alt={recipe.title}
                        />
                    </div>
                    <ul className="recipeItem1">
                        {recipe.ingredients.map((ingredient, index) => (
                            <li className="recipeItem1" key={index}>
                                {ingredient}
                            </li>
                        ))}
                    </ul>
                    <ol className="recipeItem1 instructionContainer">
                        {recipe.instructions.map((instruction, index) => (
                            <li className="recipeItem1" key={index}>
                                {instruction}
                            </li>
                        ))}
                    </ol>
                </div>
            )}
        </div>
    );
};

export default RecipeRoulettePage;
