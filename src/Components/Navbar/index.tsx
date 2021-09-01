import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/typography">Typography</Link>
                </li>
                <li>
                    <Link to="/buttons">Buttons</Link>
                </li>
                <li>
                    <Link to="/colors">Colors</Link>
                </li>
                <li>
                    <Link to="/iconography">Iconography</Link>
                </li>
            </ul>
        </nav>
    );
};
