import { useState, useEffect } from "react";
import axios from "axios";
export function Recipes() {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3030/api/recipes")
            .then((recipes) => setRecipes(recipes.data))
            .catch((err) => console.log(`${err} error fetching recipes`));
    }, []);
    console.log(recipes);
}

