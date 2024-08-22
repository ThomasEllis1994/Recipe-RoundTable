import recipesData from "../db/recipesData";
import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function RecipesByCategories() {
    const [isLoading, setIsLoading] = useState([true]);
    const [recipes, setRecipes] = useState([]);
    isLoading;
    useEffect(() => {
        setTimeout(() => {
            setRecipes(recipesData);
            setIsLoading(false);
        }, 0);
    }, []);
    console.log(recipes[0].title);

    return (
        <div className="recipeContainer">
            {recipes.map((recipe, index) => (
                <>
                    <RecipeCard
                        key={index}
                        recipeId={recipe.recipeId}
                        imageURL={recipe.imageURL}
                        title={recipe.title}
                        time={recipe.time}
                    />
                </>
            ))}
        </div>
    );
}
