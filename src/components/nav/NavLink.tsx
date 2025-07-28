import type { NavItem } from "../../types/navItem";

const NavLink: React.FC<NavItem> = ({ href, label }) => (
    <button className="text-white">
        <a href={href}>{label}</a>
    </button>
);

export default NavLink;