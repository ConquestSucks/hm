import { useState } from 'react'
import Menu from '../../assets/menu.svg?react'
import type { NavItem } from '../../types/navItem';
import { Link } from 'react-router-dom';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prev) => !prev)
    const closeMenu = () => setIsOpen(false)
        
    const leftLinks: NavItem[] = [
        { label: 'tour', href: 'tour' },
        { label: 'music', href: '/music' },
    ];

    const rightLinks: NavItem[] = [
        { label: 'media', href: '/media' },
        { label: 'shop', href: 'https://viperr.world/' },
    ];

    const mobileLinks: NavItem[] = [...leftLinks, ...rightLinks]

    return (
        <div className="flex h-[80px]">
            <nav className='flex items-center grow py-[20px] px-[27px] text-center font-extralight md:text-2xl md:justify-center md:gap-5'>
                {/* Мобильное меню */}
                <MobileMenu links={mobileLinks} isOpen={isOpen} onClick={closeMenu}/>
                
                {/* Кнопка бургер меню */}
                <button className="burger flex w-1/3 md:hidden z-20" onClick={toggleMenu}>
                    <Menu className='fill-white w-10 h-10 stroke-white' />
                </button>
                
                {/* Десктопное меню */}
                <DesktopMenu links={leftLinks}/>
                <Link to="/" className="w-1/3 text-2xl md:w-fit z-20" onClick={closeMenu}>
                    viperr
                </Link>
                <DesktopMenu links={rightLinks}/>
            </nav>
        </div>
    )
}

export default NavMenu