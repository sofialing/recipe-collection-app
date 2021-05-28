import { useState } from 'react';
import MobileMenu from './MobileMenu';
import ToggleMobileMenu from './ToggleMobileMenu';
import MainMenu from './MainMenu';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="bg-white shadow-sm">
            <div className="container mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
                        <ToggleMobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
                    </div>
                    <MainMenu />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-8 md:pr-0">
                        <ProfileDropdown toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} />
                    </div>
                </div>
            </div>
            <MobileMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        </nav>
    )
}

export default Navbar;