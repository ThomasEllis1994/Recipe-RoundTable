// import recipesData from "../db/recipesData";

import { RecipeCard } from "./RecipeCard";

import { useFetchRecipes } from "../hooks/useFetchRecipes";

export function RecipeGrid() {
    // const [isLoading, setIsLoading] = useState([true]);

    const { recipeData, isLoading } = useFetchRecipes();
    console.log(recipeData, isLoading);
    // console.log(recipeData);

    // loading ? console.log("loading") : setRecipes(recipeData);
    // if (!loading) {
    //     setRecipes(recipeData);
    // }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setRecipes(recipeData);
    //         setIsLoading(false);
    //     }, 0);
    // }, []);
    if (isLoading) {
        return (
            <>
                <p>Loading...</p>
            </>
        );
    }

    return (
        <div className="recipeContainer">
            {recipeData &&
                recipeData.map((recipe) => (
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
