import type React from "react";
import type { NavItem } from "../../types/navItem";
import NavLink from "./NavLink";

interface MobileMenuProps {
    links: NavItem[];
    isOpen: boolean;
    onClick: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ links, isOpen, onClick }) => {
    return (
        <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex flex-col items-center justify-center h-full gap-8">
                {links.map((item) => (
                    <NavLink key={item.href} {...item} onClick={onClick} />
                ))}
            </div>
        </div>
    )
}

export default MobileMenu