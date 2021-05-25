import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard'

const RecipeGrid = ({ recipes }) => {

    if (!recipes.length) {
        return (
            <div className="text-center">
                <p>You haven't added any recipes.</p>
                <Link to="/add-recipe" className="inline-block mt-5 btn">Get started</Link>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap -m-4">
            {recipes.map(recipe => <RecipeCard key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default RecipeGrid;
