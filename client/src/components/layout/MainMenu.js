import logoWordmark from 'assets/images/logo-wordmark-dark.svg';
import { Link, NavLink } from 'react-router-dom';

function MainMenu() {
    return (
        <div className="flex flex-1">
            <div className="flex shrink-0 items-center">
                <Link to="/">
                    <img
                        className="h-8 w-auto"
                        src={logoWordmark}
                        alt="RecipeHacker"
                        height="32"
                        width="158"
                    />
                </Link>
            </div>
            <div className="hidden md:ml-auto md:block">
                <div className="flex space-x-4">
                    <NavLink to="/" className="navlink" end>
                        Home
                    </NavLink>
                    <NavLink to="/add-recipe" className="navlink">
                        New Recipe
                    </NavLink>
                    <NavLink to="/recipes" className="navlink">
                        Recipe Collection
                    </NavLink>
                    <NavLink to="/meal-planner" className="navlink">
                        Meal Plan
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default MainMenu;
