import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./styles/navbar.css";
import "./styles/home.css";
import "./styles/recipeCard.css";
import "./styles/footer.css";
import "./styles/recipeGrid.css";
import "./styles/singleRecipePage.css";
import "./styles/about.css";
import "./styles/recipesPage.css";
import "./styles/pageNotFound.css";
import "./styles/recipeRoulette.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
