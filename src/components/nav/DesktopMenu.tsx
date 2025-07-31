import type { NavItem } from '../../types/navItem'
import NavLink from './NavLink'

interface DesktopMenuProps {
    links: NavItem[]
}

const DesktopMenu: React.FC<DesktopMenuProps> = ({links}) => {
    return (
        <div className='hidden md:flex gap-5'>
            {links.map((item) => <NavLink key={item.href} {...item} />)}
        </div>
    )
}

export default DesktopMenu