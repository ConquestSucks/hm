import { useState } from 'react'
import Menu from '../../assets/menu.svg?react'
import type { NavItem } from '../../types/navItem';
import NavLink from './NavLink';

const NavMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen((prev) => !prev)
        
    const leftLinks: NavItem[] = [
        { label: 'tour', href: 'tour' },
        { label: 'music', href: '/music' },
    ];

    const rightLinks: NavItem[] = [
        { label: 'media', href: '/media' },
        { label: 'shop', href: 'https://viperr.world/' },
    ];

    return (
        <div className="flex h-[80px] font-viperr">
            <nav className='flex items-center grow py-[20px] px-[27px] text-center font-extralight md:text-2xl md:justify-center md:gap-5'>
                {/* Мобильное меню */}
                <div className={`md:hidden fixed top-0 left-0 w-full h-screen bg-black z-10 transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        {[...leftLinks, ...rightLinks].map((item) => (
                            <NavLink key={item.href} {...item} />
                        ))}
                    </div>
                </div>
                
                {/* Кнопка бургер меню */}
                <button className="burger flex w-1/3 md:hidden z-20" onClick={toggleMenu}>
                    <Menu className='fill-white w-10 h-10' />
                </button>
                
                {/* Десктопное меню */}
                <div className='hidden md:flex gap-5'>
                    {leftLinks.map((item) => <NavLink key={item.href} {...item}/>)}
                </div>
                <button className="w-1/3 text-2xl md:w-fit z-20">
                    <a href='/'>viperr</a>
                </button>
                <div className='hidden md:flex gap-5'>
                    {rightLinks.map((item) => <NavLink key={item.href} {...item}/>)}
                </div>
            </nav>
        </div>
    )
}

export default NavMenu