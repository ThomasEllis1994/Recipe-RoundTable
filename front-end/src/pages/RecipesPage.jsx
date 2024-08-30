import RecipeList from "../components/RecipeList";

export default function RecipesPage() {
    return (
        <>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Breakfast</h2>
                </div>
                <div className="recipeList">
                    <RecipeList categories={["Breakfast"]} />

                    {/* <RecipeOfTheWeek recipeId={2} />
                    <RecipeOfTheWeek recipeId={10} /> */}
                </div>
            </div>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Dinner</h2>
                </div>
                <div className="recipeList">
                    <RecipeList categories={["Dinner"]} />
                </div>
            </div>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Dessert</h2>
                </div>
                <div className="recipeList">
                    <RecipeList categories={["Dessert"]} />
                </div>
            </div>
        </>
    );
}
