import { NavLink, Link } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const ProfileDropdown = ({ toggleDropdown, setToggleDropdown }) => {
    const { user } = useAuth();

    const onToggleDropdown = () => {
        setToggleDropdown(prevState => !prevState);
    }

    return (
        <div className="relative">
            <button type="button" disabled={user ? false : true} className="bg-gray-200 border border-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white" id="user-menu-button" aria-expanded={toggleDropdown} aria-haspopup="true" onClick={onToggleDropdown}>
                <span className="sr-only">Open user menu</span>
                {user?.photoURL ? (
                    <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
                ) : (
                    <svg className="h-8 w-8 rounded-full text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}

            </button>
            <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${toggleDropdown ? 'is-open' : 'is-closed'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <NavLink to="/account" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0" onClick={() => setToggleDropdown(false)}>Your profile</NavLink>
                <Link to="/logout" onClick={() => setToggleDropdown(false)} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Sign out</Link>
            </div>
        </div>
    )
}

export default ProfileDropdown;
