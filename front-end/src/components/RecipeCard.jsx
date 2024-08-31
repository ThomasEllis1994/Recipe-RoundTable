import { Link } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export const RecipeCard = (props) => {
    return (
        <>
            {/* use react router to link to single recipes pages*/}
            <Link key={props.recipeId} to={`/recipes/${props.recipeId}`}>
                <div className="recipeCard">
                    <div className="cover"></div>
                    <div className="recipeCardPic">
                        <img src={props.imageURL} alt={props.title} />
                    </div>

                    <div className="recipeCardTitle infoItem">
                        <h2 className="front">{props.title}</h2>
                    </div>
                    <div className="recipeTime infoItem">
                        <p className="front">
                            {/* use MUI icons */}
                            <AccessTimeIcon
                                style={{
                                    color: "white",
                                    fontSize: "1.2vw",
                                    marginRight: "3px",
                                }}
                            />
                            {props.time}
                        </p>
                    </div>
                </div>
            </Link>
        </>
    );
};
