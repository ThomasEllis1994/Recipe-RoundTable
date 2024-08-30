import { RecipeOfTheWeek } from "../components/RecipeOfTheWeek";

export default function RecipesPage() {
    return (
        <>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Breakfast</h2>
                </div>
                <div className="recipeList">
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    {/* <RecipeOfTheWeek recipeId={2} />
                    <RecipeOfTheWeek recipeId={10} /> */}
                </div>
            </div>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Dinner</h2>
                </div>
                <div className="recipeList">
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    {/* <RecipeOfTheWeek recipeId={0} />
                    <RecipeOfTheWeek recipeId={3} />
                    <RecipeOfTheWeek recipeId={4} />
                    <RecipeOfTheWeek recipeId={5} />
                    <RecipeOfTheWeek recipeId={7} />
                    <RecipeOfTheWeek recipeId={8} />
                    <RecipeOfTheWeek recipeId={9} />
                    <RecipeOfTheWeek recipeId={11} /> */}
                </div>
            </div>
            <div className="recipeCat">
                <div>
                    <h2 className="catTitle">Dessert</h2>
                </div>
                <div className="recipeList">
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                    {/* <RecipeOfTheWeek recipeId={6} /> */}
                </div>
            </div>
        </>
    );
}
