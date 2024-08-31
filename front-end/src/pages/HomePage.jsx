import { RecipeGrid } from "../components/RecipeGrid";
import { RecipeOfTheWeek } from "../components/RecipeOfTheWeek";
export const HomePage = () => {
    return (
        <>
            <article className="gridContainer">
                <div className="heroInfo">
                    <div id="theStory" className="col">
                        <div>
                            <header>
                                <h1 className="title primaryColor">
                                    Welcome to Recipe Roundtable
                                </h1>
                            </header>

                            <p className="story">
                                Cooking is one of life’s most essential skills.
                                I was horribly lacking in that category for most
                                of my life. That all changed with my friends
                                coming together and teaching each other some of
                                our favorite recipes. I still remember the first
                                class I “taught”. Frozen chicken tenderloins and
                                some boiled broccoli. Mine was not a very
                                popular dish. I was more of a takeout person.
                            </p>
                            <br />
                            <p className="story">
                                Home cooking can be daunting. I know it was for
                                me. So many choices of recipes and incredible
                                professional level photos that leave your mouth
                                watering. You try the same recipe, put in a ton
                                of effort and it turns out poorly, and now you
                                don’t want to cook anything the rest of the
                                week. Recipe Roundtable is here to combat the
                                fears of starting off as a home cook.
                            </p>
                            <br />
                            {/* <p className="story">
                                I wanted a place to share all the recipes I
                                learned during that time.This website is an
                                homage to those classNamees and to my friends.
                            </p> */}
                        </div>
                    </div>
                </div>
                <div className="heroRecipes RoW">
                    <h2 style={{ textAlign: "center" }}>Recipe of the Week</h2>
                    <RecipeOfTheWeek title="Steak Fried Rice" />
                </div>
            </article>

            <section className="sliders" style={{ textAlign: "center" }}>
                <h2 className="primaryColor">Recent Recipes</h2>

                <div id="recipe-list" className="row">
                    <RecipeGrid />
                </div>
            </section>
        </>
    );
};
