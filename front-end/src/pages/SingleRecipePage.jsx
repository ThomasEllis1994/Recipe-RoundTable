import { useParams } from "react-router-dom";
// import recipesData from "../db/recipesData";
import { useFetchRecipes } from "../hooks/useFetchRecipes";
import { useState, useEffect } from "react";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
function SingleRecipePage() {
    const params = useParams();
    const { recipeData } = useFetchRecipes();
    const [recipe, setRecipe] = useState([]);
    // console.log(params);

    // use useEffect for under

    // setRecipe;
    useEffect(() => {
        if (!recipeData) return;
        const singleRecipe =
            // recipeData &&
            recipeData.find((recipe) => recipe._id === params._id);
        setRecipe(singleRecipe);
    }, [params._id, recipeData]);
    // console.log(recipe);
    return (
        <>
            <div className="recipePageLayout">
                <div className="recipePageLeft">
                    <div className="recipeTop">
                        <div className="imageContainer leftRecipe">
                            <img
                                className="recipePageImage"
                                src={recipe.imageUrl}
                                alt={recipe.title}
                            />
                        </div>
                        <div className="rightRecipe">
                            <div className="recipePageTitle">
                                <h1>{recipe.title}</h1>
                            </div>
                            <div className="ingredients list">
                                <h3 className="mgn-10">Ingredients</h3>
                                {recipe.ingredients?.map((ingredient) => (
                                    <p key={ingredient} className="ingr item">
                                        {ingredient}
                                    </p>
                                ))}
                            </div>
                            <div>
                                <p>Time: {recipe.time}</p>
                            </div>
                        </div>
                    </div>
                    <div className="instructions">
                        <h3 className="mgn-10">Instructions</h3>
                        <ol className=" list">
                            {recipe.instructions?.map((instruction) => (
                                <li key={instruction} className="instr item">
                                    {instruction}
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="recipePageRight"></div>
            </div>
        </>
    );
}
export default SingleRecipePage;
