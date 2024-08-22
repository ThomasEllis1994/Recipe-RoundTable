import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer">
                    <NavLink className="footerNav community" href="#!">
                        Sign In
                    </NavLink>

                    <NavLink className="footerNav community" href="#!">
                        Sign up for our newsletter
                    </NavLink>
                    <NavLink className="footerNav community" to="#!">
                        Can&apost Decide What to Eat?
                    </NavLink>
                </div>
            </footer>
        </>
    );
};
