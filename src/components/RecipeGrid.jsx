import recipesData from "../db/recipesData";
import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function RecipeGrid() {
    const [isLoading, setIsLoading] = useState([true]);
    const [recipes, setRecipes] = useState([]);
    isLoading;
    useEffect(() => {
        setTimeout(() => {
            setRecipes(recipesData);
            setIsLoading(false);
        }, 0);
    }, []);

    return (
        <div className="recipeContainer">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.recipeId}
                    recipeId={recipe.recipeId}
                    imageURL={recipe.imageURL}
                    title={recipe.title}
                    time={recipe.time}
                />
            ))}
        </div>
    );
}
