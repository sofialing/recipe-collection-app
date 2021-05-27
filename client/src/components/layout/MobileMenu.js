import { NavLink } from 'react-router-dom';

const MobileMenu = ({ toggleMenu }) => {
    return (
        <div className="sm:hidden" id="mobile-menu" style={toggleMenu ? { display: 'initial' } : { display: 'none' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
                <NavLink to="/" className="navlink navlink-mobile">Home</NavLink>
                <NavLink to="/add-recipe" className="navlink navlink-mobile">Add recipe</NavLink>
                <NavLink to="/recipes" className="navlink navlink-mobile">Recipe collection</NavLink>
                <NavLink to="/meal-planner" className="navlink navlink-mobile">Meal Planner</NavLink>
            </div>
        </div>
    )
}

export default MobileMenu;
