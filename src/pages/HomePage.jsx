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
                                    The Reason Behind the Roundtable
                                </h1>
                            </header>

                            <p className="story">
                                Back in college, I had a friend named Brad. Brad
                                is an increbile chef, so the group would ask
                                Brad to make us food at any chance we could get.
                                He would let us help out as his kitchen crew and
                                it was always an amazing time with incredible
                                food. Before I met brad and for a time after, I
                                was a chicken tender and mac and cheese guy.
                                Thats pretty much all I cooked besides some
                                basic spiced chicken breasts with canned
                                veggies. But those lessons were the start of me
                                exploring more foods.
                            </p>
                            <br />
                            <p className="story">
                                During the great lockdown of 2020, my friends
                                and I were spread across the country and stuck
                                inside. Brad and I started the great endevour to
                                stay sane by just hanging out on facetime while
                                cooking. Soon our best friend Shilohe heard of
                                it and wanted to join. It was his idea to begin
                                actually cooking the same thing and to turn our
                                evening hangouts into cooking classNamees to
                                teach one another different recipes. Soon enough
                                our whole sohpomore year crew was in on it and
                                we had 12 people cycling through teaching
                                recipes. Not everyone cooked, but the
                                classNamees were a way of bringing us together
                                from across the country.
                            </p>
                            <br />
                            <p className="story">
                                I wanted a place to share all the recipes I
                                learned during that time.This website is an
                                homage to those classNamees and to my friends.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="heroRecipes RoW">
                    <h2 style={{ textAlign: "center" }}>Recipe of the Week</h2>
                    <RecipeOfTheWeek recipeId={2} />
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
