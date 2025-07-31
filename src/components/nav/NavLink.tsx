import { Link } from "react-router-dom";
import type { NavItem } from "../../types/navItem";

interface Props extends NavItem {
    onClick?: () => void;
}

const NavLink: React.FC<Props> = ({ href, label, onClick }) => (
    <Link to={href} className="text-white" onClick={onClick}>
        {label}
    </Link>
);

export default NavLink;