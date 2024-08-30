// import recipesData from "../db/recipesData";

import { RecipeCard } from "./RecipeCard";
import { useFetchRecipes } from "../hooks/useFetchRecipes";

export function RecipeGrid() {
    //use the useFetchRecipes hook to load recipe data
    const { recipeData, isLoading } = useFetchRecipes();
    //use loading state to ensure app data is loaded before launch
    if (isLoading) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }
    //Use a conditional to make sure the data is
    //loaded so the map method does not try to act on null
    return (
        <div className="recipeContainer">
            {recipeData &&
                recipeData.map((recipe) => (
                    //make use of the recipe card component to display the cards
                    <RecipeCard
                        key={recipe._id}
                        recipeId={recipe._id}
                        imageURL={recipe.imageUrl}
                        title={recipe.title}
                        time={recipe.time}
                    />
                ))}
        </div>
    );
}
