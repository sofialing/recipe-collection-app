import { NavLink } from 'react-router-dom';

function MobileMenu() {
    return (
        <div className="fixed -inset-x-0 bottom-0 border-t  border-gray-300 bg-gray-100 px-5 py-4 text-gray-700 shadow-lg md:hidden">
            <ul className="flex h-full items-center justify-between text-center text-xs font-medium uppercase tracking-wider">
                <li className="flex-1">
                    <NavLink
                        to="/add-recipe"
                        className="safe-bottom flex flex-col items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-5 w-5 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                        </svg>
                        <span>New Recipe</span>
                    </NavLink>
                </li>
                <li className="flex-1">
                    <NavLink
                        to="/recipes"
                        className="safe-bottom flex flex-col items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-5 w-5 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                        </svg>
                        <span>All Recipes</span>
                    </NavLink>
                </li>
                <li className="flex-1">
                    <NavLink
                        to="/meal-planner"
                        className="safe-bottom flex flex-col items-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mb-2 h-5 w-5 text-emerald-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <span>Meal Plan</span>
                    </NavLink>
                </li>
            </ul>
        </div>
        // <div className="md:hidden" id="mobile-menu" style={toggleMenu ? { display: 'initial' } : { display: 'none' }}>
        //     <div className="px-2 pt-2 pb-3 space-y-1">
        //         <NavLink to="/" className="navlink navlink-mobile" onClick={() => setToggleMenu(false)} end>Home</NavLink>
        //         <NavLink to="/add-recipe" className="navlink navlink-mobile" onClick={() => setToggleMenu(false)}>Add Aecipe</NavLink>
        //         <NavLink to="/recipes" className="navlink navlink-mobile" onClick={() => setToggleMenu(false)}>Recipe Collection</NavLink>
        //         <NavLink to="/meal-planner" className="navlink navlink-mobile" onClick={() => setToggleMenu(false)}>Meal Planner</NavLink>
        //     </div>
        // </div>
    );
}

export default MobileMenu;
