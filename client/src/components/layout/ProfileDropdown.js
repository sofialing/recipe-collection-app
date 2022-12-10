import { useAuth } from 'contexts/AuthContext';
import { NavLink } from 'react-router-dom';

function ProfileDropdown({ toggleDropdown, setToggleDropdown }) {
    const { user, logout } = useAuth();

    const onToggleDropdown = () => {
        setToggleDropdown((prevState) => !prevState);
    };

    const onLogout = () => {
        logout();
        setToggleDropdown(false);
    };

    return (
        <div className="absolute inset-y-0 right-0 flex items-center md:static md:inset-auto md:ml-8 md:pr-0">
            <div className="relative">
                <button
                    type="button"
                    disabled={!user}
                    className="flex rounded-full border border-white bg-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-500"
                    id="user-menu-button"
                    aria-expanded={toggleDropdown}
                    aria-haspopup="true"
                    onClick={onToggleDropdown}
                >
                    <span className="sr-only">Open user menu</span>
                    {user?.photoURL ? (
                        <img
                            className="h-8 w-8 rounded-full"
                            src={user.photoURL}
                            alt=""
                        />
                    ) : (
                        <svg
                            className="h-8 w-8 rounded-full text-emerald-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    )}
                </button>
                <div
                    className={`absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none ${
                        toggleDropdown ? 'is-open' : 'is-closed'
                    }`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex="-1"
                >
                    <NavLink
                        to="/account"
                        className="block px-4 py-2 text-sm text-gray-700"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-0"
                        onClick={() => setToggleDropdown(false)}
                    >
                        Your profile
                    </NavLink>
                    <button
                        onClick={onLogout}
                        className="block px-4 py-2 text-sm text-gray-700 focus:outline-none"
                        role="menuitem"
                        tabIndex="-1"
                        id="user-menu-item-1"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfileDropdown;
