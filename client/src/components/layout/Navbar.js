import { useState } from 'react';
import MobileMenu from './MobileMenu';
import MainMenu from './MainMenu';
import ProfileDropdown from './ProfileDropdown';

const Navbar = () => {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="bg-white shadow-sm sticky top-0 z-30">
            <div className="container mx-auto px-5">
                <div className="relative flex items-center justify-between h-16">
                    <MainMenu />
                    <ProfileDropdown toggleDropdown={toggleDropdown} setToggleDropdown={setToggleDropdown} />
                </div>
            </div>
            <MobileMenu />
        </nav>
    )
}

export default Navbar;