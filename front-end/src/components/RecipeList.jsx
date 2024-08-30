import { useMemo } from "react";
import useFilteredRecipes from "../hooks/useFilteredRecipes";
import { RecipeCard } from "./RecipeCard";

const RecipeList = ({ categories }) => {
    // Memoize categories to ensure stability between renders
    const memoCategories = useMemo(() => categories, [categories]);

    const recipes = useFilteredRecipes(memoCategories);

    return (
        <div className="recipeList">
            {recipes.map((recipe) => (
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
};

export default RecipeList;
