import { Link, NavLink } from 'react-router-dom';
import logoWordmark from 'assets/images/logo-wordmark-dark.svg';

const MainMenu = () => {
    return (
        <div className="flex-1 flex">
            <div className="flex-shrink-0 flex items-center">
                <Link to="/">
                    <img className="h-8 w-auto" src={logoWordmark} alt="RecipeHacker" height="32" width="158" />
                </Link>
            </div>
            <div className="hidden md:block md:ml-auto">
                <div className="flex space-x-4">
                    <NavLink to="/" className="navlink" end>Home</NavLink>
                    <NavLink to="/add-recipe" className="navlink">New Recipe</NavLink>
                    <NavLink to="/recipes" className="navlink">Recipe Collection</NavLink>
                    <NavLink to="/meal-planner" className="navlink">Meal Plan</NavLink>
                </div>
            </div>
        </div>
    )
}

export default MainMenu;
