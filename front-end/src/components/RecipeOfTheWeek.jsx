import recipesData from "../db/recipesData";
import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function RecipeOfTheWeek(props) {
    const [isLoading, setIsLoading] = useState([true]);
    const [recipe, setRecipe] = useState([]);
    isLoading;
    useEffect(() => {
        setTimeout(() => {
            setRecipe(recipesData[props.recipeId]);
            setIsLoading(false);
        }, 0);
    }, []);

    return (
        <div className="recipeContainer">
            <>
                <RecipeCard
                    recipeId={recipe._id}
                    imageURL={recipe.imageUrl}
                    title={recipe.title}
                    time={recipe.time}
                />
            </>
        </div>
    );
}
