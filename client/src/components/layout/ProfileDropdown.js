import { NavLink } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
import avatar from 'assets/images/avatar.jpg';

const ProfileDropdown = ({ toggleDropdown, setToggleDropdown }) => {
    const { logout } = useAuth();
    return (
        <div className="relative">
            <button type="button" className="bg-gray-200 border-2 border-gray-200 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-500 focus:ring-white" id="user-menu-button" aria-expanded={toggleDropdown} aria-haspopup="true" onClick={() => setToggleDropdown(prevState => !prevState)}>
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={avatar} alt="" />
            </button>
            <div className={`origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none ${toggleDropdown ? 'is-open' : 'is-closed'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                <NavLink to="/account" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your profile</NavLink>
                <button onClick={() => logout()} className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Sign out</button>
            </div>
        </div>
    )
}

export default ProfileDropdown;
