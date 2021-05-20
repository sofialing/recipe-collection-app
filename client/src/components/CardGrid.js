import { Link } from 'react-router-dom';
import Card from '../components/Card'

const CardGrid = ({ recipes }) => {

    if (!recipes.length) {
        return (
            <div className="text-center text-sm">
                <p>You haven't added any recipes. Do you want to <Link to="add-recipe">add a recipe</Link>?</p>
            </div>
        );
    }

    return (
        <div className="flex flex-wrap -m-4">
            {recipes.map(recipe => <Card key={recipe.id} recipe={recipe} />)}
        </div>
    )
}

export default CardGrid;
