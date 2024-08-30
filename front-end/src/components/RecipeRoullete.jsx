import { useState, useEffect } from "react";
import { useFetchRecipes } from "../hooks/useFetchRecipes";

// export const useRecipeRoullete = () => {
//     const { recipeData } = useFetchRecipes();
//     const [recipe, setRecipe] = useState([]);

//     function numberGenerator(length) {
//         let randomNumber = Math.floor(Math.random() * (length + 1));
//         return randomNumber;
//     }

//     useEffect(() => {
//         if (!recipeData) return;
//         let number = numberGenerator(recipeData.length);
//         setRecipe(recipeData[number]);
//         // const singleRecipe =
//         //     // recipeData &&
//         //     recipeData.find((recipe) => recipe._id === params._id);
//     }, [recipeData]);
//     console.log(recipe);
// };
