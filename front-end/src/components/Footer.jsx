import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    {/* use react router to link to pages */}
                    <NavLink className="footerNav community" href="#!">
                        Sign In
                    </NavLink>

                    <NavLink className="footerNav community" href="#!">
                        Sign up for our newsletter
                    </NavLink>
                    <NavLink
                        className="footerNav community"
                        to="/recipeRoulette"
                    >
                        Play some Recipe Roulette
                    </NavLink>
                </div>
            </footer>
        </>
    );
};
