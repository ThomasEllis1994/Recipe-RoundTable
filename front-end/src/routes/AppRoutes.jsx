import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import RecipesPage from "../pages/RecipesPage";
import SingleRecipePage from "../pages/SingleRecipePage";
import { AboutPage } from "../pages/AboutPage";
import PageNotFound from "../pages/PageNotFound";
const AppRoutes = (props) => {
    return (
        <Routes>
            {/* index matches on default/home URL: / */}
            <Route path="/" element={<HomePage {...props} />} />
            <Route path="/recipes" element={<RecipesPage {...props} />} />
            <Route
                path="/recipes/:_id"
                element={<SingleRecipePage {...props} />}
            />
            <Route path="/about" element={<AboutPage {...props} />} />
            <Route path="*" element={<PageNotFound />} />
            {/* <Route path="/about" element={<AboutPage {...props} />} />

            <Route
                path="/bitcoinRates"
                element={<BitcoinRatesPage {...props} />}
            />

            <Route path="/login" element={<LoginPage {...props} />} />

            <Route path="/card" element={<MuiCard {...props} />} />

            <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
    );
};

export default AppRoutes;
