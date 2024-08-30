// import recipesData from "../db/recipesData";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import { useEffect, useState } from "react";
import { RecipeCard } from "./RecipeCard";

export function RecipeOfTheWeek(props) {
    const { recipeData } = useFetchRecipes();
    const [recipe, setRecipe] = useState([]);
    // console.log(params);

    // use useEffect for under

    // setRecipe;
    useEffect(() => {
        if (!recipeData) return;
        const singleRecipe =
            // recipeData &&
            recipeData.find((recipe) => recipe.title === props.title);
        setRecipe(singleRecipe);
    }, [props.title, recipeData]);
    // Testing - console.log(recipeData);
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
