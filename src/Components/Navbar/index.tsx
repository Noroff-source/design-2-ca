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
                    <Link to="/colors">Colors</Link>
                </li>
            </ul>
        </nav>
    );
};
