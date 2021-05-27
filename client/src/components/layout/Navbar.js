import { NavLink, Link } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';
const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <header className="text-gray-500 bg-white dark:bg-gray-900 dark:text-white shadow-sm">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/" className="flex font-medium items-center text-gray-900 dark:text-white mb-4 md:mb-0">
                    <svg className="w-12 h-12 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                        <path fill="white" d="m19.53 59.425a1.974 1.974 0 0 1 -2.712-.495 1.921 1.921 0 0 1 .561-2.7l10.049-6.444 2.839 2.014zm27.94-1.963a1.93 1.93 0 0 1 -3.006 1.965l-28.039-19.9a1 1 0 0 0 -1.168.008 6.93 6.93 0 0 1 -7.91-.233 7.562 7.562 0 0 1 -3.136-4.29 5.4 5.4 0 0 1 4.7-6.959 7.563 7.563 0 0 1 5.152 1.3 6.93 6.93 0 0 1 3.174 7.247 1 1 0 0 0 .43 1.087l28.954 18.542a1.912 1.912 0 0 1 .849 1.233zm9.18-18.162a6.931 6.931 0 0 1 -7.911.231 1 1 0 0 0 -1.168-.008l-11.063 7.854-2.652-1.7 12.474-8a1 1 0 0 0 .43-1.085 6.965 6.965 0 0 1 3.178-7.247c3.2-2.157 7.314-1.681 9.163 1.058s.748 6.74-2.451 8.897z" />
                        <path fill="white" d="m22.82 35-.4-2h19.16l-.4 2zm-3.82-29a6.931 6.931 0 0 1 5.083 2.2 1 1 0 0 0 1.626-.25 6.986 6.986 0 0 1 12.582 0 1 1 0 0 0 1.626.25 6.931 6.931 0 0 1 5.083-2.2 7 7 0 0 1 0 14 1 1 0 0 0 -.98.8l-2.04 10.2h-3.827l.837-5.858-1.98-.284-.877 6.142h-3.133v-11h-2v11h-3.133l-.877-6.142-1.98.284.837 5.858h-3.827l-2.04-10.2a1 1 0 0 0 -.98-.8 7 7 0 0 1 0-14z" />
                    </svg>
                    <span className="ml-4 text-xl tracking-wider">RecipeHacker</span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center justify-center tracking-wider uppercase text-sm font-normal">
                    <NavLink to="/add-recipe" className="mr-5 hover:text-gray-900">Add recipe</NavLink>
                    <NavLink to="/recipes" className="mr-5 hover:text-gray-900">Recipes</NavLink>
                    <NavLink to="/meal-planner" className="mr-5 hover:text-gray-900">Meal Planner</NavLink>
                    <NavLink to="/account" className="mr-5 hover:text-gray-900">Account</NavLink>
                    {user ? (
                        <button onClick={() => logout()} className="mr-5 tracking-wider uppercase hover:text-gray-900">Log out</button>
                    ) : (
                        <Link to="/login" className="mr-5 hover:text-gray-900">Log in</Link>
                    )}
                </nav>

            </div>
        </header>
    )
}

export default Navbar;