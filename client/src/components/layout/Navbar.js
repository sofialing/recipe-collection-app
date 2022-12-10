import { useState } from 'react';

import MainMenu from './MainMenu';
import MobileMenu from './MobileMenu';
import ProfileDropdown from './ProfileDropdown';

function Navbar() {
    const [toggleDropdown, setToggleDropdown] = useState(false);

    return (
        <nav className="sticky top-0 z-30 bg-white shadow-sm">
            <div className="container mx-auto px-5">
                <div className="relative flex h-16 items-center justify-between">
                    <MainMenu />
                    <ProfileDropdown
                        toggleDropdown={toggleDropdown}
                        setToggleDropdown={setToggleDropdown}
                    />
                </div>
            </div>
            <MobileMenu />
        </nav>
    );
}

export default Navbar;
