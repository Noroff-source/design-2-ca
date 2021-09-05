import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink to="/" activeStyle={{ fontWeight: "bold" }} exact>
                        The Brand
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/typography" activeStyle={{ fontWeight: "bold" }}>
                        Typography
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/buttons" activeStyle={{ fontWeight: "bold" }}>
                        Buttons
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/colors" activeStyle={{ fontWeight: "bold" }}>
                        Colors
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/iconography" activeStyle={{ fontWeight: "bold" }}>
                        Iconography
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/images" activeStyle={{ fontWeight: "bold" }}>
                        Images
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
