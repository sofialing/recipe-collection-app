import { Link, NavLink } from 'react-router-dom';
import logo from 'assets/images/logo.svg';
import logoWordmark from 'assets/images/logo-wordmark-dark.svg';

const MainMenu = () => {
    return (
        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
                <Link to="/" className="block xl:hidden">
                    <img className="h-9 w-auto" src={logo} alt="RecipeHacker" width="36" height="36" />
                </Link>
                <Link to="/" className="hidden xl:block">
                    <img className="h-9 w-auto" src={logoWordmark} alt="RecipeHacker" />
                </Link>
            </div>
            <div className="hidden sm:block sm:ml-auto">
                <div className="flex space-x-4">
                    <NavLink to="/" className="navlink" end>Home</NavLink>
                    <NavLink to="/add-recipe" className="navlink">Add recipe</NavLink>
                    <NavLink to="/recipes" className="navlink">Recipe collection</NavLink>
                    <NavLink to="/meal-planner" className="navlink">Meal Planner</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;
