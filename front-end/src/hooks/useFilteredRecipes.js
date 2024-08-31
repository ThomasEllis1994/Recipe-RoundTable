import { useState, useEffect, useCallback } from "react";

const useFilteredRecipes = (categories) => {
    //set states needed to filter through recipes
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    // Fetch recipes from an API or local source
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await fetch(
                    "http://localhost:3030/api/recipes"
                );
                const data = await response.json();
                setRecipes(data.data);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            }
        };

        fetchRecipes();
    }, []); // Empty dependency array means this runs once when component mounts. Use dependencies when using dynamic data

    // Filter recipes by categories
    const filterRecipes = useCallback(() => {
        if (categories.length === 0) {
            setFilteredRecipes(recipes);
        } else {
            const filtered = recipes.filter((recipe) =>
                recipe.categories.some((category) =>
                    categories.includes(category)
                )
            );
            setFilteredRecipes(filtered);
        }
    }, [recipes, categories]); // Dependencies include recipes and categories

    // Update filtered recipes whenever categories or recipes change
    useEffect(() => {
        filterRecipes();
    }, [categories, filterRecipes]); // Dependencies include categories and filterRecipes

    return filteredRecipes;
};

export default useFilteredRecipes;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// import { useState, useEffect, useCallback } from "react";

// // Custom hook to fetch and filter recipes
// const useFilteredRecipes = (categories) => {
//     const [recipes, setRecipes] = useState([]);
//     const [filteredRecipes, setFilteredRecipes] = useState([]);

//     // Fetch recipes from an API or local source
//     useEffect(() => {
//         const fetchRecipes = async () => {
//             try {
//                 const response = await fetch(
//                     "http://localhost:3030/api/recipes"
//                 );
//                 const data = await response.json();
//                 setRecipes(data.data);
//             } catch (error) {
//                 console.error("Error fetching recipes:", error);
//             }
//         };

//         fetchRecipes();
//     }, []);

//     // Filter recipes by categories
//     const filterRecipes = useCallback(() => {
//         if (categories.length === 0) {
//             setFilteredRecipes(recipes);
//         } else {
//             const filtered = recipes.filter((recipe) =>
//                 recipe.categories.some((category) =>
//                     categories.includes(category)
//                 )
//             );
//             setFilteredRecipes(filtered);
//         }
//     }, [recipes, categories]);

//     // Update filtered recipes whenever categories or recipes change
//     useEffect(() => {
//         filterRecipes();
//     }, [categories, filterRecipes]);

//     return filteredRecipes;
// };

// export default useFilteredRecipes;
